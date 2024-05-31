import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';

function HomePage(props) {
  const cards = [{
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

    return (
      <>
        <MainHeader/>
        <BaseContainer>
          <Test cards={cards}/>
        </BaseContainer>
      </>
    );
  }
  
  export default HomePage;