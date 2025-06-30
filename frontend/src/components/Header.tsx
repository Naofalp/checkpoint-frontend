import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ display: "flex", gap: "1rem", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundColor:"pink"
}}>
      <h1>Checkpoint : frontend</h1>
      <Link to="/">Countries</Link>
    </header >
  );
}
