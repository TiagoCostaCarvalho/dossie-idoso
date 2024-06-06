import './HomeContainer.css';

function HomeContainer(props) {
  return (
    <div className="HomeContainer">
      {props.children}
    </div>
  );
}

export default HomeContainer;
