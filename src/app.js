window.onload = function() {
  let sustantivos = [
    "La tormenta eléctrica",
    "Mi aplicación de notas",
    "El autobús",
    "La red wifi de mi casa",
    "Mi gato",
    "La planta de mi estudio",
    "La estufa"
  ];
  let acciones = [
    " causó un apagón en mi calle,",
    " borró todo lo que tenía guardado,",
    " se retrasó por un atasco,",
    " dejó de funcionar,",
    " se acostó sobre el teclado,",
    " se volcó y llenó de tierra mi escritorio,",
    " empezó a echar humo de repente,"
  ];
  let evitar = [
    " me quedé sin terminar el proyecto",
    " perdí los datos",
    " no pude llegar a la reunión a tiempo",
    " me quedé sin acceso a los proyectos",
    " borrando todo el código que tenía escrito",
    " perdí mucho tiempo limpiando en lugar de trabajar",
    " tuve que evacuar el lugar en plena jornada"
  ];
  let cuándo = [
    " justo antes de la fecha prevista.",
    " justo cuándo iba a revisarlos.",
    " la mañana del evento.",
    " la noche de la entrega.",
    " cuándo estaba apunto de terminar.",
    " justo cuándo me disponía a empezar el proyecto.",
    " en el momento clave del trabajo."
  ];

  let parte1 = Math.floor(Math.random() * sustantivos.length);
  let parte2 = Math.floor(Math.random() * acciones.length);
  let parte3 = Math.floor(Math.random() * evitar.length);
  let parte4 = Math.floor(Math.random() * cuándo.length);

  document.querySelector("#excusas").innerHTML =
    sustantivos[parte1] + acciones[parte2] + evitar[parte3] + cuándo[parte4];
};
