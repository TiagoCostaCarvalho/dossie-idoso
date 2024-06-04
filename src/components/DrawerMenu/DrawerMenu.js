import './DrawerMenu.css';
import { Drawer } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Logo from 'components/Logo/Logo';
import AccessibilityButtons from 'components/AccessibilityButtons/AccessibilityButtons';

function DrawerMenu(props) {
  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <div className='Drawer'>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="close drawer"
              sx={{ mr: 2 }}
              style={{width: '48px'}}
              onClick={props.onClose}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Logo />
          <div style={{width:'48px'}} />
        </div>
        <AccessibilityButtons className='SideButtons' style={{marginTop:'1rem'}} />

      </div>
    </Drawer>
  );
}

export default DrawerMenu;
