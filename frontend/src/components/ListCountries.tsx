import { useQuery } from "@apollo/client"
import { COUNTRIES } from "../api/example"
import { Link } from "react-router-dom";

export function ListCountries() {
    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) {
        return <div>Chargement en cours</div>;
    }
    if (error) {
        return (
            <div>
                <p>{error.message}</p>
            </div>
        );
    }


    return (
        <section className="listcountries-section">
            <h1>Liste des pays</h1>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem", justifyContent: " center" }}>
                {data?.countries ? (
                    data.countries.map((country: any) => (
                        <Link
                            key={country.id}
                            to={`/country/view/${country.id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div
                                key={country.id}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    width: "12rem",
                                    textAlign: "center",
                                }}
                            >
                                <p style={{ fontSize: "5rem", marginBlock: "0" }}>{country.emoji}</p>
                                <p style={{ fontWeight: "600" }}>{country.name}</p>
                                <p style={{ color: "gray" }}>{country.code}</p>
                                <p style={{ fontSize: "0.9rem" }}>{country.continent?.name}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div>Aucun pays trouvé</div>
                )}
            </div>
        </section>
    )
}