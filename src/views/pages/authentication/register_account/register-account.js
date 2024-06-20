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
  Link,
  Breadcrumbs,
  Avatar,
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CancelIcon from "components/Icons/CancelIcon/CancelIcon";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import MainHeader from "components/MainHeader/MainHeader";
import Footer from "components/Footer/footer";
import { useTheme } from "@mui/material";

const registerSchema = z
  .object({
    name: z.string().nonempty({ message: "O nome é requerido" }),
    email: z.string().email({ message: "E-mail inválido" }),
    password: z
      .string()
      .min(8, { message: "Deve possuir no minimo 8 caracteres" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

function RegisterAccount() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [hasErrors, setHasErrors] = useState(true);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "password") {
        return {
          ...prev,
          [name]: value,
          confirmPassword: "",
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });

    const validation = registerSchema.safeParse({ ...formData, [name]: value });

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

    const validation = registerSchema.safeParse(formData);
    if (validation.success) {
      localStorage.setItem("user", JSON.stringify({ name: formData.name }));
      navigate("/success-signup");
    } else {
      console.log("Erro ao preencher os dados");
    }
  };

  const theme = useTheme();

  return (
    <>
      <MainHeader user="Pedro123" isLoggedIn={false} isInCreateAccountPage={true} />
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color={theme.palette.link.main} href="/">
            Home
          </Link>
          <Typography color={theme.palette.link.main}>Criar Conta</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>

      <Container>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Typography variant="h4" align="center">
                Criar Conta
              </Typography>
              <Typography variant="h6" textAlign={"left"}>
                Insira suas informações de cadastro abaixo:
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <FormControl fullWidth error={!!errors.name} margin="normal">
                <TextField
                  required
                  label="Nome do usuário"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name || " "}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="clear input"
                          onClick={() => handleClear("name")}
                          edge="end"
                        >
                          <CancelIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <FormControl fullWidth error={!!errors.email} margin="normal">
                <TextField
                  required
                  label="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email || "pedro@email.com"}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="clear input"
                          onClick={() => handleClear("email")}
                          edge="end"
                        >
                          <CancelIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <FormControl fullWidth error={!!errors.password} margin="normal">
                <TextField
                  required
                  label="Senha"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password || " "}
                  fullWidth
                  InputProps={{
                    endAdornment: (
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
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <FormControl fullWidth error={!!errors.confirmPassword} margin="normal">
                <TextField
                  required
                  label="Confirmar senha"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword || " "}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Mostrar confirmação de senha"
                          onClick={handleToggleShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Button
                type="submit"
                variant="contained"
                color="tertiary"
                fullWidth
                disabled={hasErrors}
              >
                Criar conta
              </Button>
            </Grid>
            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Box>
                <Typography variant="h6" align="center" sx={{ color: 'quaternary.contrastText', pt: "1em" }}>
                  <span>Já possui uma conta?</span>
                  <br />
                  <Link href="/login" sx={{ color: 'quaternary.contrastText' }} underline="always" >
                    Entre aqui
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Button
                variant="outlined"
                sx={{ color: 'quaternary.contrastText', mt: "1em", mb: "1em" }}
                startIcon={<Avatar sx={{ height: '1em', width: '1em' }} src={'https://cdn-icons-png.flaticon.com/128/300/300221.png'} />}
                fullWidth>
                Entrar com Gmail
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default RegisterAccount;
