
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const VehiculoDetalle = () => {
    const { uid } = useParams();
    const navigate = useNavigate();
    const [detalles, setDetalles] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.info/api/vehicles/${uid}`)
            .then(res => res.json())
            .then(data => {
                setDetalles(data);
            })
            .catch(err => console.error("Error cargando detalles:", err));
    }, [uid]);

    if (!detalles) return <p className="text-white text-center mt-5">Escaneando motor...</p>;

    const imageUrl = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/vehicles/${uid}.jpg`;

    return (
        <div className="container mt-5">
            <button onClick={() => navigate("/vehiculos")} className="btn btn-outline-warning mb-4">
                <i className="fa-solid fa-arrow-left me-2"></i> Regresar
            </button>
            <div className="row bg-dark p-4 rounded text-white border border-secondary">
                <div className="col-md-6">
                    <img 
                        src={imageUrl} 
                        className="img-fluid rounded"
                        alt={detalles.name}
                        onError={(e) => {
                            e.target.src = "https://placehold.co/400x600/212529/ffe81f?text=Imagen+No+Disponible";
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="text-warning">{detalles.name}</h1>
                    <hr className="bg-warning" />
                    <p><strong>Modelo:</strong> {detalles.model}</p>
                    <p><strong>Clase:</strong> {detalles.vehicle_class}</p>
                    <p><strong>Pasajeros:</strong> {detalles.passengers}</p>
                    <p><strong>Costo:</strong> {detalles.cost_in_credits} créditos</p>
                </div>
            </div>
        </div>
    );
};