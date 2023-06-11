import { Outlet } from "@remix-run/react";
import style from "~/styles/guitarras.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

function Tienda() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  );
}

export default Tienda;
