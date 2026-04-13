import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="d-flex justify-content-center gap-3">
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
          <li>
            <Link className="dropdown-item" to="/personajes">Personajes</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/planetas">Planetas</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/vehiculos">Vehículos</Link>
          </li>
        </ul>
      </div>

				<form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button className="btn btn-outline-warning text-dark" type="submit"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
    </form>
	</div>
	);
}; 