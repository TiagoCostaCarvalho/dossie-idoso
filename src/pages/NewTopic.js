import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';

function NewTopic(props) {
    return (
      <>
        <MainHeader/>
        <BaseContainer>
          <p>novo tópico!</p>
        </BaseContainer>
      </>
    );
  }
  
  export default NewTopic;