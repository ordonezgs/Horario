//Definiendo Fecha
//Código Anterior
  // var hoy = new Date();
  // var dd = hoy.getDate();
  // var mm = hoy.getMonth() + 1; //January is 0!
  // var mm1 = hoy.getMonth() + 1;
  // var yyyy = hoy.getFullYear();
  //
  // if (dd < 10) {
  //   dd = "0" + dd;
  // }
  //
  // if (mm < 10) {
  //   mm = "0" + mm;
  // }
  //
  // hoy = dd + "/" + mm + "/" + yyyy;
  // //Fin
  // var actual = yyyy, mm1, dd
  // function getDayNumber(baseDate, targetDate, daysInCycle) {
  //     var startOfBaseDate = new Date(baseDate).setHours(0, 0, 0, 0);
  //     var startOfTargetDate = new Date(targetDate).setHours(0, 0, 0, 0);
  //     var differenceInDays = Math.round((startOfTargetDate - startOfBaseDate) / 864e5);
  //     return ((differenceInDays % daysInCycle + daysInCycle) % daysInCycle) + 1;
  // }
  // var diact = getDayNumber(new Date(2019, 3, 21), new Date(yyyy, mm1, dd), 6)
//Fin Codigo Anterior
//Definir Materias de Día
var d1 ={
  h1: "Inglés",
  h2: "x2",
  h3: "Español",
  h4: "Informatica",
  h5: "x2",
  h6: "Química",
  h7: "Biología"
}
var d2 ={
  h1: "Matematicas",
  h2: "Religión",
  h3: "Español",
  h4: "x2",
  h5: "Física",
  h6: "Química",
  h7: "x2"
}
var d3 ={
  h1: "Edu. Física",
  h2: "x2",
  h3: "Estadistica/Geometria",
  h4: "x2",
  h5: "Física",
  h6: "Inglés",
  h7: "x2"
}
var d4 ={
  h1: "Dir. Curso",
  h2: "Investigación",
  h3: "Matematicas",
  h4: "Física",
  h5: "x2",
  h6: "Inglés",
  h7: "x2"
}
var d5 ={
  h1: "Sociales/Catedra",
  h2: "x2",
  h3: "Música",
  h4: "Música",
  h5: "Filosofía",
  h6: "Matematicas",
  h7: "x2"
}
var d6 ={
  h1: "Español",
  h2: "Historia de Colombia",
  h3: "Filosofía",
  h4: "Etica",
  h5: "Química",
  h6: "Inglés",
  h7: "x2"
}
// switch (diact) {
//   case 1:
//     obtenerHorario(d1, d2)
//     break;
//   case 2:
//     obtenerHorario(d2, d3)
//     break;
//   case 3:
//     obtenerHorario(d3, d4)
//     break;
//   case 4:
//     obtenerHorario(d4, d5)
//     break;
//   case 5:
//     obtenerHorario(d5, d6)
//     break;
//   case 6:
//     obtenerHorario(d6, d1)
//     break;
//   default:
//     const dano = "DAÑO"
//     document.getElementById("1").innerHTML = dano
//     document.getElementById("2").innerHTML = dano
//     document.getElementById("c1l1").innerHTML = dano
//     document.getElementById("c1l2").innerHTML = dano
//     document.getElementById("c1l3").innerHTML = dano
//     document.getElementById("c1l4").innerHTML = dano
//     document.getElementById("c1l5").innerHTML = dano
//     document.getElementById("c1l6").innerHTML = dano
//     document.getElementById("c1l7").innerHTML = dano
//     document.getElementById("c2l1").innerHTML = dano
//     document.getElementById("c2l2").innerHTML = dano
//     document.getElementById("c2l3").innerHTML = dano
//     document.getElementById("c2l4").innerHTML = dano
//     document.getElementById("c2l5").innerHTML = dano
//     document.getElementById("c2l6").innerHTML = dano
//     document.getElementById("c2l7").innerHTML = dano
// }

//
//Definiendo Funciones.
function mostrarDatos() {
  var hoy = moment().locale('es').format('L')
  document.getElementById("fecha").innerHTML = hoy + " Correspondiente a día " + dian1
  document.getElementById("dia").innerHTML = dian2
  return
}
function obtenerHorario (hoy, man){
  document.getElementById("1").innerHTML = "Día " + dian1
  document.getElementById("c1l1").innerHTML = hoy.h1
  document.getElementById("c1l2").innerHTML = hoy.h2
  document.getElementById("c1l3").innerHTML = hoy.h3
  document.getElementById("c1l4").innerHTML = hoy.h4
  document.getElementById("c1l5").innerHTML = hoy.h5
  document.getElementById("c1l6").innerHTML = hoy.h6
  document.getElementById("c1l7").innerHTML = hoy.h7
  document.getElementById("2").innerHTML = "Día " + dian2
  document.getElementById("c2l1").innerHTML = man.h1
  document.getElementById("c2l2").innerHTML = man.h2
  document.getElementById("c2l3").innerHTML = man.h3
  document.getElementById("c2l4").innerHTML = man.h4
  document.getElementById("c2l5").innerHTML = man.h5
  document.getElementById("c2l6").innerHTML = man.h6
  document.getElementById("c2l7").innerHTML = man.h7
  return
}
  //Definir si es Sábado o Domingo
  function cambiarHoy(texto) {
    document.getElementById("1").innerHTML = texto
    document.getElementById("c1l1").innerHTML = texto
    document.getElementById("c1l2").innerHTML = texto
    document.getElementById("c1l3").innerHTML = texto
    document.getElementById("c1l4").innerHTML = texto
    document.getElementById("c1l5").innerHTML = texto
    document.getElementById("c1l6").innerHTML = texto
    document.getElementById("c1l7").innerHTML = texto
    return
  }
  function cambiarMañana(texto) {
    document.getElementById("2").innerHTML = texto
    document.getElementById("c2l1").innerHTML = texto
    document.getElementById("c2l2").innerHTML = texto
    document.getElementById("c2l3").innerHTML = texto
    document.getElementById("c2l4").innerHTML = texto
    document.getElementById("c2l5").innerHTML = texto
    document.getElementById("c2l6").innerHTML = texto
    document.getElementById("c2l7").innerHTML = texto
    return
  }
console.log("El Mes Actual es: " + moment().format('MM'));
var mes = Number(moment().format('MM'))
var dia = Number(moment().format('DD'))
console.log(typeof mes)
switch (mes >= 03) {
  case (mes == 03 && dia == 27):
    var dian1 = 1
    var dian2 = 2
    obtenerHorario(d1, d2)
    mostrarDatos()
    break;
  case (mes == 03 && dia == 28):
    var dian1 = 2
    var dian2 = 3
    obtenerHorario(d2, d3)
    mostrarDatos()
    break;
  case (mes == 03 && dia == 29):
    var dian1 = 3
    var dian2 = 4
    obtenerHorario(d3, d4)
    mostrarDatos()
    break;
  case (mes == 04 && dia == 01):
    var dian1 = 4
    var dian2 = 5
    obtenerHorario(d4, d5)
    mostrarDatos()
    break;
  case (mes == 04 && dia == 02):
    var dian1 = 5
    var dian2 = 6
    obtenerHorario(d5, d6)
    mostrarDatos()
    break;
  case (mes == 04 && dia == 03):
    var dian1 = 6
    var dian2 = 1
    obtenerHorario(d6, d1)
    mostrarDatos()
    alert("Hoy se acaba el ciclo 7 \ny \nEl 1 (primer) periodo")
    break;
  default:
  alert("Se necesita arreglo, el horario está desconfigurado")
  cambiarHoy("Desconfigurado")
  cambiarMañana("Desconfigurado")
}
//
// console.log(diaSemana);
var diaSemana = moment().format('dddd')
switch (diaSemana) {
  case "Saturday":
    cambiarHoy("Sábado")
    cambiarMañana("Domingo")
    break;
  case "Sunday":
    cambiarHoy("Domingo")
    break;
  default:
}

//Calcular los siguientes días.


  // alert(
  //   "El valor para el día 25 es:\n"
  //  + getDayNumber(new Date(2019, 3, 21), new Date(2019, 3, 25), 6)
  //  + "\n" + "El valor para el día 26 es: \n"
  //  + getDayNumber(new Date(2019, 3, 21), new Date(2019, 3, 26), 6)
  // )

//
