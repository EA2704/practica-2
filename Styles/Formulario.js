document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("miFormulario");
  const resultado = document.getElementById("resultado");
  const info = document.getElementById("info");
  const cerrarBtn = document.getElementById("cerrar");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = parseInt(document.getElementById("edad").value.trim());

    if (nombre === "" || apellidos === "") {
      alert("El nombre y los apellidos son requeridos.");
      return;
    }

    if (isNaN(edad) || edad <= 0) {
      alert("La edad debe ser mayor a 0.");
      return;
    }

info.innerHTML = `
  <strong>Nombre:</strong> <span class="dato">${nombre}</span><br><br>
  <strong>Apellidos:</strong> <span class="dato">${apellidos}</span><br><br>
  <strong>Edad:</strong> <span class="dato">${edad}</span>
`;

    resultado.style.display = "block";
  });

  cerrarBtn.addEventListener("click", () => {
    resultado.style.display = "none";
    formulario.reset();
    document.getElementById("nombre").focus();
  });
});