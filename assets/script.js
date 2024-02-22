console.log('fizzbuzz');

// container 
const box = document.getElementById('mine-container');
// ciclo da 1 a 100 
for(let i = 1; i <= 100; i++){

  if(!(i % 3) && !(i % 5)){
    box.innerHTML += `<div class="box violet green">fizz-buzz</div>`
  }else if (!(i % 3)){
    box.innerHTML += `<div class="box violet">fizz</div>`
  }else if (!(i % 5)){
    box.innerHTML += `<div class="box green">buzz</div>`
  }else{
    box.innerHTML += `<div class="box">${i}</div>`
  }


  console.log(box);
}