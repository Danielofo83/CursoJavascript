inicio:
for(let contador = 0; contador <= 30; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
    console.log(contador);
}