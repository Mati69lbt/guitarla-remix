//importa useLoaderData
import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";
import { getGuitarras } from "~/models/guitarras.server";
import style from "~/styles/guitarras.css";

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

export function meta() {
  return [
    { title: "GuitarLa - Tienda" },
    {
      description: "Venta de Guitarras, Blog de Musica, Coleccion de guitarras",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

function Tienda() {
  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra guitarra={guitarra.attributes} key={guitarra.id} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Tienda;
