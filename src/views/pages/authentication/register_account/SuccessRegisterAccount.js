import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Typography, Stack } from "@mui/material";

function SuccessRegisterAccount() {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ marginBottom: 8, padding: 15 }}>
        <Typography variant="h6" align="center">
          Bem vindo,
        </Typography>
        <Typography variant="h6" align="center">
          {user}!
        </Typography>

        <Typography variant="h6" align="center">
          Conta criada com sucesso!
        </Typography>

        <Card
          sx={{
            backgroundColor: "#F7F2FA",
            padding: 25,
            borderRadius: 2,
            width: "100%",
            textAlign: "center",
            alignContent: "center",
            flexDirection: "column",
            variant: "outlined",
          }}
        >
          <Typography variant="h6" align="center">
            Agora você pode criar e editar conteúdo para o Dossiê Idoso!
          </Typography>
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
        </Card>
      </Container>
    </>
  );
}

export default SuccessRegisterAccount;
