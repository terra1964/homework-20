//простые числа

for (let i = 3; i <= 1000; i++) { // Для всех i
    let number = true;
  for (let j = 2; j < i; j++) { //  делится ли число на себя
    if (i % j == 0){// не подходит, берём следующее
    number = false; 
        }
    }
if(number){
  console.log( `Простое число ${i}` ); // простое число
  }
}