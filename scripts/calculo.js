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
  function alerta() {
    if (!(diaSemana == "Saturday" || diaSemana == "Sunday")) {
      alert("Se necesita arreglo, el horario está desconfigurado")
    }
  }
console.log("El Mes Actual es: " + moment().format('MM'));
var mes = Number(moment().format('MM'))
var dia = Number(moment().format('DD'))
// Define que tipo de variables es   ------>   console.log(typeof mes)
switch (mes >= 03) {
  case ((mes == 03 && dia == 27) || (mes == 04 && dia == 04) || (mes == 04 && dia == 22) || (mes == 04 && dia == 30) || (mes == 05 && dia == 09) || (mes == 05 && dia == 22) || (mes == 05 && dia == 30) || (mes == 06 && dia == 10) || (mes == 06 && dia == 18) || (mes == 07 && dia == 18) || (mes == 07 && dia == 26) || (mes == 08 && dia == 05) || (mes == 08 && dia == 14) || (mes == 08 && dia == 23) || (mes == 09 && dia == 02) || (mes == 09 && dia == 16) || (mes == 09 && dia == 24) || (mes == 10 && dia == 10) || (mes == 10 && dia == 18) || (mes == 10 && dia == 28) || (mes == 11 && dia == 06) /*Domingos*/|| (mes == 04 && dia == 07) || (mes == 06 && dia == 28) || (mes == 07 && dia == 28) || (mes == 08 && dia == 25) || (mes == 10 && dia == 20)):
    var dian1 = 1
    var dian2 = 2
    obtenerHorario(d1, d2)
    mostrarDatos()
    break;
  case ((mes == 03 && dia == 28) || (mes == 04 && dia == 08) || (mes == 04 && dia == 23) || (mes == 05 && dia == 02) || (mes == 05 && dia == 10) || (mes == 05 && dia == 23) || (mes == 05 && dia == 31) || (mes == 06 && dia == 11) || (mes == 06 && dia == 19) || (mes == 07 && dia == 19) || (mes == 07 && dia == 29) || (mes == 08 && dia == 06) || (mes == 08 && dia == 15) || (mes == 08 && dia == 26) || (mes == 09 && dia == 03) || (mes == 09 && dia == 17) || (mes == 09 && dia == 25) || (mes == 10 && dia == 03) || (mes == 10 && dia == 21) || (mes == 10 && dia == 29) || (mes == 11 && dia == 07) /*Domingos*/|| (mes == 05 && dia == 15) || (mes == 06 && dia == 03) || (mes == 06 && dia == 21) || (mes == 07 && dia == 21)):
    var dian1 = 2
    var dian2 = 3
    obtenerHorario(d2, d3)
    mostrarDatos()
    break;
  case ((mes == 03 && dia == 29) || (mes == 04 && dia == 09) || (mes == 04 && dia == 24) || (mes == 05 && dia == 03) || (mes == 05 && dia == 16) || (mes == 05 && dia == 24) || (mes == 06 && dia == 04) || (mes == 06 && dia == 12) || (mes == 06 && dia == 20) || (mes == 07 && dia == 22) || (mes == 07 && dia == 30) || (mes == 08 && dia == 08) || (mes == 08 && dia == 16) || (mes == 08 && dia == 27) || (mes == 09 && dia == 04) || (mes == 09 && dia == 18) || (mes == 09 && dia == 26) || (mes == 10 && dia == 04) || (mes == 10 && dia == 22) || (mes == 10 && dia == 30) || (mes == 11 && dia == 08) /*Domingos*/ || (mes == 03 && dia == 31) || (mes == 05 && dia == 05) || (mes == 05 && dia == 26) || (mes == 07 && dia == 14) || (mes == 08 && dia == 19) || (mes == 10 && dia == 14) || (mes == 11 && dia == 11)):
    var dian1 = 3
    var dian2 = 4
    obtenerHorario(d3, d4)
    mostrarDatos()
    break;
  case ((mes == 04 && dia == 01) || (mes == 04 && dia == 10) || (mes == 04 && dia == 25) || (mes == 05 && dia == 06) || (mes == 05 && dia == 17) || (mes == 05 && dia == 27) || (mes == 06 && dia == 05) || (mes == 06 && dia == 13) || (mes == 07 && dia == 15) || (mes == 07 && dia == 23) || (mes == 07 && dia == 31) || (mes == 08 && dia == 09) || (mes == 08 && dia == 20) || (mes == 08 && dia == 28) || (mes == 09 && dia == 05) || (mes == 09 && dia == 19) || (mes == 09 && dia == 27) || (mes == 10 && dia == 15) || (mes == 10 && dia == 23) || (mes == 10 && dia == 31) || (mes == 11 && dia == 12) /*Domingos*/||(mes == 05 && dia == 19) || (mes == 08 && dia == 11) || (mes == 09 && dia == 29)):
    var dian1 = 4
    var dian2 = 5
    obtenerHorario(d4, d5)
    mostrarDatos()
    break;
  case ((mes == 04 && dia == 02) || (mes == 04 && dia == 11) || (mes == 04 && dia == 26) || (mes == 05 && dia == 07) || (mes == 05 && dia == 20) || (mes == 06 && dia == 14) || (mes == 07 && dia == 16) || (mes == 07 && dia == 24) || (mes == 08 && dia == 01) || (mes == 08 && dia == 12) || (mes == 08 && dia == 21) || (mes == 08 && dia == 29) || (mes == 09 && dia == 06) || (mes == 09 && dia == 20) || (mes == 09 && dia == 30) || (mes == 10 && dia == 16) || (mes == 10 && dia == 24) || (mes == 11 && dia == 01) || (mes == 11 && dia == 13) /*Domingos*/|| (mes == 04 && dia == 28) || (mes == 06 && dia == 16) || (mes == 09 && dia == 08) || (mes == 09 && dia == 22) || (mes == 11 && dia == 04)):
    var dian1 = 5
    var dian2 = 6
    obtenerHorario(d5, d6)
    mostrarDatos()
    break;
  case ((mes == 04 && dia == 03) || (mes == 04 && dia == 12) || (mes == 04 && dia == 29) || (mes == 05 && dia == 08) || (mes == 05 && dia == 21) || (mes == 05 && dia == 29) || (mes == 06 && dia == 07) || (mes == 06 && dia == 17) || (mes == 07 && dia == 17) || (mes == 07 && dia == 25) || (mes == 08 && dia == 02) || (mes == 08 && dia == 13) || (mes == 08 && dia == 22) || (mes == 08 && dia == 30) || (mes == 09 && dia == 09) || (mes == 09 && dia == 16) || (mes == 10 && dia == 01) || (mes == 10 && dia == 17) || (mes == 10 && dia == 25) || (mes == 11 && dia == 05) || (mes == 11 && dia == 14) /*Domingos*/|| (mes == 04 && dia == 21) || (mes == 06 && dia == 09) || (mes == 08 && dia == 04) || (mes == 09 && dia == 01) || (mes == 09 && dia == 15) || (mes == 10 && dia == 27)) :
    var dian1 = 6
    var dian2 = 1
    obtenerHorario(d6, d1)
    mostrarDatos()
    break;
  default:
  window.onload = function() {
  alerta();
  }
  cambiarHoy("Desconfigurado")
  cambiarMañana("Desconfigurado")
}
//Avisos varios
if (moment().locale('es').format('L') == "03/04/2019") {
  alert("Hoy se acaba el primer periodo")
}else if (moment().locale('es').format('L') == "02/04/2019" || moment().locale('es').format('L') == "03/04/2019") {
  alert("Hoy son institucionales")
  cambiarHoy("Institucionales")
  cambiarMañana("Institucionales")
}else if (moment().locale('es').format('L') == "01/04/2019") {
  alert("Mañana son Institucionales")
}
//Fin Avisos Varios.

//
// console.log(diaSemana);
var diaSemana = moment().format('dddd')
switch (diaSemana) {
  case "Friday":
    cambiarMañana("Sábado")
    document.getElementById("Hcom2").innerHTML = "     Sábado     "
    break;
  case "Saturday":
    cambiarHoy("Sábado")
    cambiarMañana("Domingo")
    document.getElementById("Hcom1").innerHTML = "     Sábado     "
    document.getElementById("Hcom2").innerHTML = "     Domingo    "
    break;
  case "Sunday":
    cambiarHoy("Domingo")
    document.getElementById("Hcom1").innerHTML = "     Domingo    "
    break;
  default:
}
