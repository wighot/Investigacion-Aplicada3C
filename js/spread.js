function init(){

    var nombre = [2];
    var edad = [2];
    var numFav = [2];

    alert("Bienvenido, a continuación se te mostrara un ejemplo de la sintaxis spread");

    nombre[0] = prompt("Digite su nombre: ");
    edad[0] = prompt("Digite su edad: ");
    numFav[0] = prompt("Digite su numero favorito: ");

    var resul1 = [...nombre];
    var resul2 = [...edad];
    var resul3 = [...numFav];
    var resul4 = [...nombre, ...edad, ...numFav];

    alert ("Su nombre es: " + resul1);
    alert ("Su edad es: " + resul2);
    alert ("Su numero favorito es: " + resul3);

    alert ("Los datos que ingreso fueron: " + resul4);
}