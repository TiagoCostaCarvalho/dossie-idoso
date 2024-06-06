import BreadcrumbsContainer from 'components/BreadcrumbsContainer/BreadcrumbsContainer';
import BaseContainer from '../components/BaseContainer/BaseContainer';
import MainHeader from '../components/MainHeader/MainHeader';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NewEntryContent from 'components/NewEntryContent/NewEntryContent';

function NewEntry(props) {
    return (
      <>
        <MainHeader/>
        <BreadcrumbsContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="#21005D" href="/">
              Home
            </Link>
            <Typography color="#21005D">Nova entrada</Typography>
          </Breadcrumbs>
        </BreadcrumbsContainer>
        
        <BaseContainer>
          <NewEntryContent/>
        </BaseContainer>
      </>
    );
  }
  
  export default NewEntry;