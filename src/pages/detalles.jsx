import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PersonajeDetalle = () => {
    const { uid } = useParams();
    const [detalles, setDetalles] = useState(null);

    const cleanUid = uid.trim();
    let categoryPath = "characters";
    if (location.pathname.includes("planetas")) categoryPath = "planets";
    if (location.pathname.includes("vehiculos")) categoryPath = "vehicles";

    const imageUrl = `https://github.com/LiAguaviva/StarWarsUniverse/tree/main/client/public/images/characters/${categoryPath}/${cleanUid}.jpg`;
    

    useEffect(() => {
        console.log("Intentando cargar imagen desde:", imageUrl);

        fetch(`https://www.swapi.tech/api/people/${cleanUid}`)
            .then(res => res.json())
            .then(data => setDetalles(data.result.properties))
            .catch(err => console.error(err));
    }, [cleanUid]);

    if (!detalles) return <p className="text-white">Cargando detalles del héroe...</p>;

    return (
        <div className="container mt-5">
            <div className="row bg-dark p-4 rounded">
                <div className="col-md-6">
                    <img
                        src={imageUrl}
                        className="img-fluid rounded shadow"
                        alt={detalles.name}
                        style={{ minHeight: "100%", objectFit: "cover" }}
                        onError={(e) => {
                            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>
                <div className="col-md-6 text-white">
                    <h1 className="display-4 text-warning">{detalles.name}</h1>
                    <hr className="bg-warning" />
                    <p><strong>Altura:</strong> {detalles.height} cm</p>
                    <p><strong>Color de cabello:</strong> {detalles.hair_color}</p>
                    <p><strong>Género:</strong> {detalles.gender}</p>
                    <p><strong>Año de nacimiento:</strong> {detalles.birth_year}</p>
                </div>
            </div>
        </div>
    );
};