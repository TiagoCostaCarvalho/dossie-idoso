import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from 'components/Footer/footer';

function HomePage(props) {
    return (
      <>
        <MainHeader user="Pedro123" isLoggedIn={false} isInCreateAccountPage={false} />
        <BaseContainer>
          <Test />
        </BaseContainer>
        <Footer />
      </>
    );
  }
  
  export default HomePage;