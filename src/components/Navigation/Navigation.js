import './Navigation.css';

function Navigation() {
  return (
    <div style={{display:'flex', marginTop:'2.5rem', marginBottom:'1rem', marginRight:'auto'}}>
      <a className='MenuAnchor'>Home</a>
      <a className='MenuAnchor'>Saúde</a>
      <a className='MenuAnchor'>Lazer</a>
      <a className='MenuAnchor'>Economia</a>
      <a className='MenuAnchor'>Sobre</a>
      <a className='MenuAnchor'>Ajuda</a>
    </div>
  );
}

export default Navigation;
