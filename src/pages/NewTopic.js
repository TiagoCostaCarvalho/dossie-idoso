import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NewTopicContent from 'components/NewTopicContent/NewTopicContent';

function NewTopic(props) {
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
          <NewTopicContent/>
        </BaseContainer>
      </>
    );
  }
  
  export default NewTopic;