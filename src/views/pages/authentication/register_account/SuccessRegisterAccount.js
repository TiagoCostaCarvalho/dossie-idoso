import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Typography, Stack, Link, Breadcrumbs, Grid } from "@mui/material";
import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import MainHeader from "components/MainHeader/MainHeader";
import Footer from "components/Footer/footer";
import { useTheme } from "@mui/material";

function SuccessRegisterAccount() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <>
      <MainHeader />
      <BreadcrumbsContainer>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color={theme.palette.link.main} href="/">
            Home
          </Link>
          <Typography color={theme.palette.link.main}>Criar Conta</Typography>
        </Breadcrumbs>
      </BreadcrumbsContainer>
      <Container>
        <Typography variant="h6" align="center">
          Bem vindo,
        </Typography>
        <Typography variant="h6" align="center">
          {user.name}!
        </Typography>

        <Typography variant="h6" align="center" sx={{ "mt": "2em" }}>
          Conta criada com sucesso!
        </Typography>


        <Card
          sx={{
            backgroundColor: "#F7F2FA",
            margin: "1em",
            padding: "1em",
            borderRadius: 2,
            // width: "100%",
            textAlign: "center",
            alignContent: "center",
            flexDirection: "column",
            variant: "outlined",
          }}
        >


          <Grid container spacing={2} sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>

              <Typography variant="h6" align="center" color={"#000000"}>
                Agora você pode criar e editar conteúdo para o Dossiê Idoso!
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
              <Stack spacing={2} direction="column">
                <Button variant="contained" onClick={(e) => navigate("/new-topic")}>
                  Começar novo conteúdo!
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => navigate("/new-topic/example")}
                >
                  Como criar conteúdo?
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>

      </Container>
      <Footer />
    </>
  );
}

export default SuccessRegisterAccount;
