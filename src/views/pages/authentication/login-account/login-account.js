import { useState } from "react";
import { z } from "zod";
import {
  TextField,
  Button,
  Box,
  FormControl,
  InputAdornment,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().nonempty({ message: "A senha é requerido" }),
});

function LoginAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [hasErrors, setHasErrors] = useState(true);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    const validation = loginSchema.safeParse({ ...formData, [name]: value });

    if (validation.success) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      setHasErrors(false);
    } else {
      const newErrors = validation.error.flatten().fieldErrors;
      setErrors((prev) => ({ ...prev, [name]: newErrors[name]?.[0] || "" }));
      setHasErrors(true);
    }
  };

  const handleClear = (field) => {
    setFormData((prev) => ({ ...prev, [field]: "" }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    handleChange({ target: { name: field, value: "" } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = loginSchema.safeParse(formData);
    if (validation.success) {
      localStorage.setItem("user", formData.name);
      navigate("/");
    } else {
      console.log("Erro ao preencher os dados");
    }
  };

  return (
    <Container sx={{ padding: 15 }}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <div>
          <Typography variant="h4" align="center">
            Entrar no DossiêIdoso{" "}
          </Typography>
        </div>

        <FormControl fullWidth error={!!errors.email} margin="normal">
          <TextField
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            InputProps={{
              endAdornment: formData.email && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear input"
                    onClick={() => handleClear("email")}
                    edge="end"
                  >
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl fullWidth error={!!errors.password} margin="normal">
          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            InputProps={{
              endAdornment: formData.password && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Mostrar senha"
                    onClick={handleToggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={hasErrors}
        >
          Iniciar sessão
        </Button>
      </Box>
      <Box>
        <Typography variant="h6" align="center">
          {" "}
          Ainda não tem conta?
          <br /> <a href="/signup">criar conta</a>
        </Typography>
      </Box>
    </Container>
  );
}

export default LoginAccount;
