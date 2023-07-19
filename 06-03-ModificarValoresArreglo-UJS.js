//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}

autos[1] = 'MerecedesBenz';
console.log(autos[1]);

//estamos imprimiendo los elementos que tenemos en un arreglo
console.log(autos.length);
//con esta funcion agregamos un nuevo elemento al final del arreglo con el valor de Audi
 autos.push('Audi');
console.log(autos);