import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';

function HomePage(props) {
    return (
      <>
        <MainHeader/>
        <BaseContainer>
          <Test />
        </BaseContainer>
      </>
    );
  }
  
  export default HomePage;