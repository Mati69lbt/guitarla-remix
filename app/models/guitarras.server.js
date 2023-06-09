export async function getGuitarras() {
  const url = process.env.API_URL;
  const respuesta = await fetch(`${url}/guitarras?populate=Imagen`);
  return await respuesta.json();
}
