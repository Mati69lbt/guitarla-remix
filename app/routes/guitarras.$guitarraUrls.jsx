import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import style from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { guitarraUrls } = params;
  const guitarra = await getGuitarra(guitarraUrls);
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return { guitarra };
}

export function meta({ data }) {
  if (!data) {
    return [{ title: "GuitarLA" }, { description: "Guitarra no encontrada" }];
  }

  const nombre = data.guitarra.data[0].attributes.nombre;
  return [
    { title: `GuitarLA - ${nombre}` },
    {
      description:
        "Venta de Guitarras, Blog de Musica, Coleccion de guitarras, guitarras baratas",
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

const Guitarra = () => {
  const { guitarra } = useLoaderData();
  const { nombre, descripcion, Imagen, precio } = guitarra.data[0].attributes;
  const img = Imagen.data.attributes.url;

  return (
    <main className="contenedor guitarra">
      <img src={img} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">U$D {precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;
