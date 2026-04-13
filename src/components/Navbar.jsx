import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		
		<nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-3">
			
			<div className="container d-flex justify-content-between">
				
				<a className="navbar-brand" href="#">
    <img src="src/assets/img/icons8-la-guerra-de-las-galaxias-480.png" alt="star war" width="80" height="80"/>
  </a>

<div className="d-flex align-items-center gap-3">
 <div className="dropdown">
        <a 
          className="nav-link dropdown-toggle text-white" 
          href="#" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false"
        >
          Categorías
        </a>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#3">Personajes</a></li>
          <li><a className="dropdown-item" href="#4">Planetas</a></li>
          <li><a className="dropdown-item" href="#5">Vehículos</a></li>
        </ul>
      </div>

				<form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button className="btn btn-outline-warning text-dark" type="submit"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
    </form>
	</div>
			</div>
		</nav>
	);
};

