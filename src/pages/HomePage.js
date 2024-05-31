import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';

function HomePage(props) {
  const saudeCards = [{
    title: "Titulo muito louco",
    description: "Descricao muito louca"
  },
  {
    title: "Aawawa",
    description: "Aawaaawawa"
  },
  {
    title: "BBBBB",
    description: "BBBBBB"
  }
]

const lazerCards = [{
  title: "Lazer muito louco",
  description: "Descricao muito louca"
},
{
  title: "Lazer Aawawa",
  description: "Aawaaawawa"
},
{
  title: "Lazer BBBBB",
  description: "BBBBBB"
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
          <Test saudeCards={saudeCards} lazerCards={lazerCards} economiaCards={economiaCards}/>
        </BaseContainer>
      </>
    );
  }
  
  export default HomePage;