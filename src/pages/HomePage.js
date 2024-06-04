import Test from '../components/Test/Test';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import Footer from 'components/Footer/footer';

function HomePage(props) {
    return (
      <>
        <MainHeader/>
        <BaseContainer>
          <Test />
        </BaseContainer>
        <Footer />
      </>
    );
  }
  
  export default HomePage;