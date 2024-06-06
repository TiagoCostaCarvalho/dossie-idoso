import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NewTopicExampleContent from 'components/NewTopicExampleContent/NewTopicExampleContent';
import Footer from '../components/Footer/footer';

function NewTopicExample(props) {
    return (
      <>
        <MainHeader/>
        <BreadcrumbsContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#21005D" href="/">
              Home
            </Link>
            <Typography color="#21005D">Novo Tópico</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        
        <BaseContainer>
          <NewTopicExampleContent/>
        </BaseContainer>
        <Footer />
      </>
    );
  }
  
  export default NewTopicExample;