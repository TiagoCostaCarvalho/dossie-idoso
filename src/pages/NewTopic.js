import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NewTopicContent from 'components/NewTopicContent/NewTopicContent';
import Footer from '../components/Footer/footer';
import { useTheme } from '@mui/material';

function NewTopic(props) {
    const theme = useTheme();

    return (
      <>
        <MainHeader/>
        <BreadcrumbsContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color={theme.palette.link.main} href="/">
              Home
            </Link>
            <Typography color={theme.palette.link.main}>Novo Tópico</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        
        <BaseContainer>
          <NewTopicContent/>
        </BaseContainer>
        <Footer />
      </>
    );
  }
  
  export default NewTopic;