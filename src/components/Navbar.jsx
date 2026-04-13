import { Link } from "react-router-dom";


export const Navbar = () => {

	return (
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-3">
  <div className="container d-flex justify-content-center">
    
    <Link className="navbar-brand" to="/">
      <img 
        src="src/assets/img/icons8-la-guerra-de-las-galaxias-480.png" 
        alt="star wars" 
        width="250" 
        height="250"
      />
    </Link>

  </div>
</nav>
	);
};

