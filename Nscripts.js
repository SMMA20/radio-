// 🎵 Audios destacados
const audios = {
  ficcion: "audios/ficcion.mp3",
  informativo: "audios/informativo.mp3",
  entretenimiento: "audios/entretenimiento.mp3"
};

// Asignación automática
window.onload = () => {
  document.getElementById("audio-ficcion").src = audios.ficcion;
  document.getElementById("audio-informativo").src = audios.informativo;
  document.getElementById("audio-entretenimiento").src = audios.entretenimiento;
};
