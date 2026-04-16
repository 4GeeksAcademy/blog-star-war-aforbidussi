import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Personajes = () => {

    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        if (store.personajes && store.personajes.length > 0) return;

        const fetchPersonajes = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people/");
                if (!response.ok) throw new Error("Error cargando personajes");
                const data = await response.json();
                
                dispatch({ 
                    type: "SET_PERSONAJES", 
                    payload: data.results 
                });
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchPersonajes();
    }, [store.personajes, dispatch]);

    return (
        <div className="container mt-4">
            <h1 className="text-warning">Personajes</h1>
            <div className="row flex-nowrap overflow-auto">
                {store.personajes?.map(item => (
                    <div key={item.uid} className="card m-2" style={{ minWidth: "18rem" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to={`/personajes/${item.uid}`} className="btn btn-primary">Detalles</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};