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
  Grid,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CancelIcon from "components/Icons/CancelIcon/CancelIcon";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import MainHeader from "components/MainHeader/MainHeader";
import BreadcrumbsContainer from "components/BreadcrumbsContainer/BreadcrumbsContainer";
import Footer from 'components/Footer/footer';
import { useTheme } from "@mui/material";


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
      localStorage.setItem("user", JSON.stringify({ name: "Nome Login" }));
      navigate("/");
    } else {
      console.log("Erro ao preencher os dados");
    }
  };

  const theme = useTheme();

  return (
    <>
      <MainHeader />
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color={theme.palette.link.main} href="/">
            Home
          </Link>
          <Typography color={theme.palette.link.main}>Iniciar sessão</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>

      <Container >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Typography variant="h4">
                Entrar no DossiêIdoso
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} lg={8} >

              <FormControl fullWidth error={!!errors.email} margin="normal">
                <TextField
                  label="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email || " "}
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

            <Grid item xs={12} md={8} lg={8}>
              <FormControl fullWidth error={!!errors.password} margin="normal">
                <TextField
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

            <Grid item xs={12} md={8} lg={8}>
              <Button
                type="submit"
                variant="contained"
                color="tertiary"
                fullWidth
                disabled={hasErrors}
              >
                Iniciar Sessão
              </Button>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Box>
                <Typography variant="h6" align="center" sx={{ color: 'quaternary.contrastText' }}>
                  <span>Ainda não tem conta?</span>
                  <br />
                  <Link href="/signup" sx={{ color: 'quaternary.contrastText' }} underline="always" >
                    criar conta
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>


      </Container>
      <Footer />
    </>

  );
}

export default LoginAccount;
