import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SuccessRegisterAccount() {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    return (
        <div>
            <p>Bem vindo,</p>
            <p>{user}!</p>

            <p>Conta criada com sucesso!</p>

            <div>
                <p>Agora você pode criar e editar conteúdo para o Dossiê Idoso!</p>

                <Button
                    variant="contained"
                    onClick={(e) => navigate('/new-topic')}
                >Começar novo conteúdo!</Button>

                <Button
                    color="secondary"
                    variant="contained"
                    onClick={(e) => navigate('/new-topic/example')}
                >Como criar conteúdo?</Button>
            </div>
        </div>
    );
};

export default SuccessRegisterAccount;