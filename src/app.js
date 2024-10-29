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
    " se acostó sobre el teclado",
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

  let rdm1 = Math.floor(Math.random() * sustantivos.length);
  let rdm2 = Math.floor(Math.random() * acciones.length);
  let rdm3 = Math.floor(Math.random() * evitar.length);
  let rdm4 = Math.floor(Math.random() * cuándo.length);

  document.querySelector("#excusas").innerHTML =
    sustantivos[rdm1] + acciones[rdm2] + evitar[rdm3] + cuándo[rdm4];
};
