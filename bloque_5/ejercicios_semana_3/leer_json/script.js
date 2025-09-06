// Cargar el archivo JSON y usarlo como "base de datos"
fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log("Usuarios desde JSON:", data.usuarios);

    // Ejemplo: mostrar los nombres en la página
    const lista = document.getElementById("listaUsuarios");
    data.usuarios.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.nombre} (${u.email})`;
      lista.appendChild(li);
    });
  })
  .catch(error => console.error("Error cargando JSON:", error));