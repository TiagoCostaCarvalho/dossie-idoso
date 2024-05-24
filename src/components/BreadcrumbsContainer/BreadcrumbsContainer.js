import './BreadcrumbsContainer.css';

function BreadcrumbsContainer(props) {
  return (
    <div className="BreadcrumbsContainer">
      {props.children}
    </div>
  );
}

export default BreadcrumbsContainer;
