function isLeapYear(año1,año2){
    if (typeof año1 != "number" || typeof año2 != "number"){
        console.log("Uno de los argumentos no es un número");
        return "Alguno de los argumentos proporcionados no es un número."
    }
    //Para pasar los valores float a int
    año1 = Math.floor(año1);
    año2 = Math.floor(año2);
    if(año1<2001 || año1>año2 || año2>2500){
        console.log("Alguno de los argumentos no es válido");
        return "Alguno de los argumentos no es válido."
    }
    //Guardar los años bisiestos en un array
    var años_bisiestos = [];
    for(let i=año1; i<=año2;i++){
        if(i%4==0 || (i%100==0 && i%400==0)){
            años_bisiestos.push(i);
        }
    }
    console.log(años_bisiestos.join())
    return años_bisiestos.join();
}
document.write(isLeapYear(2001,2500));