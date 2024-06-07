import Test from '../components/Test/Test';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from '../components/Footer/footer';
import idosoCorridaUrl from "../resources/idosoCorrida.jpg";
import idosoDiabetesUrl from "../resources/idosoDiabetes.jpg";
import idosoTristeUrl from "../resources/idosoTriste.jpg";
import dinheirosAntigosUrl from "../resources/dinheirosAntigos.jpg";
import coisasAntigasUrl from "../resources/coisasAntigas.jpg";
import idosoCelular from "../resources/idosoCelular.jpg"; 
import idosoFestaUrl from "../resources/idosoFesta.jpeg"; 
import idosoJogoUrl from "../resources/idosoJogo.jpg"; 
import idosoBoardgameUrl from "../resources/idosoBoardgame.jpg"; 
import HomeContainer from 'components/HomeContainer/HomeContainer';


function HomePage(props) {
  const saudeCards = [{
    title: "Exercite-se, idoso!",
    description: "Veja dicas de exercícios para fazer!", 
    imgUrl: idosoCorridaUrl,
    imgAlt: "Idosos correndo"
  },
  {
    title: "Como conviver com a diabetes?",
    description: "Seja um idoso diabético saudável!",
    imgUrl: idosoDiabetesUrl,
    imgAlt: "Idoso medindo sua diabetes"
  },
  {
    title: "Depressão em idosos",
    description: "Veja dicas de como tratar e prevenir.",
    imgUrl: idosoTristeUrl,
    imgAlt: "Idoso triste"
  }  
]

const lazerCards = [{
  title: "Como encontrar festas para idosos",
  description: "Busque festas na sua região.",
  imgUrl: idosoFestaUrl,
  imgAlt: "Idosos festejando"
},
{
  title: "Melhores videogames para a 3ª idade",
  description: "Jogos com muita acessibilidade.",
  imgUrl: idosoJogoUrl,
  imgAlt: "Idoso jogando videogame"
},
{
  title: "Dicas de boardgames para jogar com o neto",
  description: "Diversão à beça para a família.",
  imgUrl: idosoBoardgameUrl,
  imgAlt: "Idoso jogando boardgame com criança"
}
]

const economiaCards = [{
  title: "O que fazer com cédulas antigas?",
  description: "Dicas de como conservar ou vender.",
  imgUrl: dinheirosAntigosUrl,
  imgAlt: "Cédulas e moedas antigas"
},
{
  title: "Como vender objetos inutilizados",
  description: "Tire a poeira do seu sótão!",
  imgUrl: coisasAntigasUrl,
  imgAlt: "Diversos objetos empoeirados"
},
{
  title: "Melhores bancos digitais para idosos",
  description: "Bancos digitais com boa acessibilidade.",
  imgUrl: idosoCelular,
  imgAlt: "Idoso utilizando um celular"
}
]
 
    return (
      <>
        <MainHeader user="Pedro123" isLoggedIn={false} isInCreateAccountPage={false} />
        <HomeContainer>
          <Test saudeCards={saudeCards} lazerCards={lazerCards} economiaCards={economiaCards}/> 
        </HomeContainer>
        <Footer />
      </>
    );
}
  
  export default HomePage;