// 1. creo un ciclo che stampi i numeri da 1 a 100

for (var i = 1; i <= 100; i++) {
// 2. multipli di 3 e di 5
    if ((i % 3 == 0) && (i % 5 == 0)) {
      
// stampo 

    console.log("FizzBuzz");
    document.getElementById('listaNumeri').innerHTML += "<li>" + "FizzBuzz" + "</li>";

// multipli di 3    
    }else if (i % 3 == 0) {
      
// stampo 

    console.log("Fizz");
    document.getElementById('listaNumeri').innerHTML += "<li>" + "Fizz" + "</li>";

// multipli di 5
    }else if (i % 5 == 0){
      
// stampo 
    console.log("Buzz");
    document.getElementById('listaNumeri').innerHTML += "<li>" + "Buzz" + "</li>";

// stampo il numero
    }else {

// stampo
    console.log(i);
    document.getElementById('listaNumeri').innerHTML += "<li>" + [i] + "</li>";

    }
}
