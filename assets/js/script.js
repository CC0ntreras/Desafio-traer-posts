document.addEventListener('DOMContentLoaded', function() {
    const traerPostsButton = document.getElementById('traerPostsButton');
    traerPostsButton.addEventListener('click', obtenerPosts);
  });
  
  async function obtenerPosts() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!respuesta.ok) {
        throw new Error('Algo salió mal en la solicitud de la API');
      }
      const posts = await respuesta.json();
      mostrarPosts(posts);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
      document.getElementById('posts-contenedor').innerHTML = `<p>Ocurrió un error al cargar los posts: ${error.message}</p>`;
    }
  }

  function mostrarPosts(posts) {
    const contenedor = document.getElementById('post-data'); // Cambiado a 'post-data' para coincidir con el ID en tu HTML

    const lista = document.createElement('ul');
    posts.forEach(post => {
      const elemento = document.createElement('li');
      elemento.innerHTML = `<strong>${post.title}</strong> ${post.body}`;
      lista.appendChild(elemento);
    });
    contenedor.innerHTML = ''; 
    contenedor.appendChild(lista);
  }
