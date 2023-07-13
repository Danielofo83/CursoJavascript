//let autos = new Array('BMW','Mercedes Benz','Volvo');
const autos = ['BMW','Mercedes Benz','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//recorremos un arreglo
for(let i=0 ;i<autos.length;i++) {
    console.log(autos[i]);
}

// recorremos el arreglo mostrando la posicion de cada elemento

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] );
}