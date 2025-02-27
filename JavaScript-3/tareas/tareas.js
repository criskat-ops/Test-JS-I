// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:

  return array[0];

}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  let flag = array.length;
  return array[flag-1]

}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;

}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  //let long = array.length;
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index] + 1;
  }
  return array

}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let cadena = '';

  for (let index = 0; index < palabras.length; index++) {   
    if (index === (palabras.length - 1)) {
      cadena = cadena + palabras[index];
      break;
    }
    cadena = cadena + palabras[index] + ' ';
  }

  return cadena
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  if (array.find(element => element === elemento)) {
    return true
  }else{
    return false
  }

}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total = 0;
  for (let index = 0; index < numeros.length; index++) {
     total = total + numeros[index];
  }
  return total
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let promedio = 0;
  for (let index = 0; index < resultadosTest.length; index++) {
    promedio = promedio + resultadosTest[index];
  }

  promedio = promedio / resultadosTest.length;
  return promedio
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroGrande = 0;

  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] > numeroGrande) {
      numeroGrande = numeros[index]
    }
  }
  return numeroGrande
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let contador = 0;
  
  for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[index] > 19){
      contador = contador + 1 
    }
  }

  return contador 
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  if (numeroDeDia === 1 || numeroDeDia  === 7) {
    return "Es fin de semana"
  }else if(numeroDeDia > 1 && numeroDeDia < 7){
    return "Es dia Laboral"
  }

} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let toString = n.toString;
  let number = toString.split(',');
  if (number[0] === '9') {
    return true
  }else{
    return false
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  for (let index = 0; index < arreglo.length; index++) {
    if(arreglo[0] !== arreglo[index]){
      return false
    }
  }
  return true
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let newArray = [];

  if (array.find(element => element === 'Enero')) {
    newArray.push('Enero')
    if (array.find('Marzo')) {
      newArray.push('Marzo')
      if (array.find('Noviembre')) {
        newArray.push('Noviembre')
      } else {
        return "No se encontraron los meses pedidos"
      }
    } else {
      return "No se encontraron los meses pedidos"
    }
  } else {
    return "No se encontraron los meses pedidos"
  }

}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index] > 100){
      newArray.push(array[index])
    }
  }
  return newArray
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
