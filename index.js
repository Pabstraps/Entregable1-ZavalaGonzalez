let numeroA = parseInt(prompt("Ingreso primer numero"))
let operacion = prompt("Ingrese la operacion: \n + , - , * , / ")
let numeroB = parseInt(prompt("Ingrese segundo numero"))

let resultado 

let resultados = []

switch (operacion) {
    
    case "+":
        resultado=numeroA+numeroB
        alert("Tu resultado es: \n" + resultado)
        document.getElementById ("resultadoPrint").innerHTML = "Tu resultado es: " + resultado;
        break;

        case "-":
        resultado=numeroA-numeroB
        alert("Tu resultado es: \n" + resultado)
        document.getElementById ("resultadoPrint").innerHTML = "Tu resultado es: " + resultado;
        break;

        case "*":
        resultado=numeroA*numeroB
        alert("Tu resultado es: \n" + resultado)
        document.getElementById ("resultadoPrint").innerHTML = "Tu resultado es: " + resultado;
        break;

        case "/":
        resultado=numeroA/numeroB
        alert("Tu resultado es: \n" + resultado)
        document.getElementById ("resultadoPrint").innerHTML = "Tu resultado es: " + resultado;
        break;

    default:
       alert ("Signo no valido")
        break;
}

        resultados.push(resultado)
        
       

    



    

   