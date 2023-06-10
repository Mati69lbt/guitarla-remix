export async function getPosts() {
  const url = process.env.API_URL;
  const respuesta = await fetch(`${url}/posts?populate=imagen`);
  return await respuesta.json();
}
