import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import { Breadcrumbs, Link, Typography, useTheme } from '@mui/material';
import NewEntryContent from 'components/NewEntryContent/NewEntryContent';
import Footer from '../components/Footer/footer';

function NewEntry(props) {
    const theme = useTheme();

    return (
      <>
        <MainHeader/>
        <BreadcrumbsContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color={theme.palette.link.main} href="/">
              Home
            </Link>
            <Typography color={theme.palette.link.main}>Nova entrada</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        
        <BaseContainer>
          <NewEntryContent/>
        </BaseContainer>
        <Footer />
      </>
    );
  }
  
  export default NewEntry;