import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { COUNTRY } from "../api/example";
import { useEffect } from "react";

export function DetailPage() {

    const params = useParams();

    const { data, error, loading } = useQuery(COUNTRY, {
        variables: {
            code: params.code!
        },
        skip: params.code === undefined,
    });

    if (loading) {
        return <div>Chargement en cours</div>;
    };
    if (error) return <div>Erreur : {error.message}</div>;


    return <>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem", justifyContent: " center" }}>
            {data?.country && (
                <div
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        padding: "1rem",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        width: "12rem",
                        textAlign: "center",
                    }}
                >
                    <p style={{ fontSize: "5rem", marginBlock: "0" }}>{data.country.emoji}</p>
                    <p style={{ fontWeight: "600" }}>{data.country.name}</p>
                    <p style={{ color: "gray" }}>{data.country.code}</p>
                    <p style={{ fontSize: "0.9rem" }}>{data.country.continent?.name}</p>
                </div>
            )
            }
        </div>
    </>;
}