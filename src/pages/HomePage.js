import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
<<<<<<< Updated upstream
=======
import imageUrl from "../resources/foca-harpa.jpg"
>>>>>>> Stashed changes

function HomePage(props) {
  const saudeCards = [{
    title: "Titulo muito louco",
    description: "Descricao muito louca",
<<<<<<< Updated upstream
    imgUrl: "https://escolakids.uol.com.br/upload/conteudo/images/2018/12/foca-harpa.jpg"
=======
    //imgUrl: "https://escolakids.uol.com.br/upload/conteudo/images/2018/12/foca-harpa.jpg",
    imgUrl: imageUrl,
    imgAlt: "Foca harpa"
>>>>>>> Stashed changes
  },
  {
    title: "Aawawa",
    description: "Aawaaawawa"
  },
  {
    title: "BBBBB",
    description: "BBBBBB"
  },
  {
    title: "CCCCC",
    description: "CCCCC"
  },
  {
    title: "DDDDD",
    description: "DDDDD"
  },
  {
    title: "EEEEE",
    description: "EEEEE"
  }
]

const lazerCards = [{
  title: "Lazer muito louco",
  description: "Descricao muito louca"
},
{
  title: "Lazer muito louco",
  description: "Descricao muito louca"
},
{
  title: "Lazer muito louco",
  description: "Descricao muito louca"
}
]

const economiaCards = [{
  title: "Economia muito louca",
  description: "Descricao muito louca"
},
{
  title: "Economia Aawawa",
  description: "Aawaaawawa"
},
{
  title: "Economia BBBBB",
  description: "BBBBBB"
}
]

    return (
      <>
        <MainHeader/>
        <BaseContainer>
<<<<<<< Updated upstream
          <Test saudeCards={saudeCards} lazerCards={lazerCards} economiaCards={economiaCards}/>
=======
          <Test saudeCards={saudeCards} lazerCards={lazerCards} economiaCards={economiaCards}/> 
>>>>>>> Stashed changes
        </BaseContainer>
      </>
    );
  }
  
  export default HomePage;