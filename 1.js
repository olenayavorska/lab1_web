//Написати програму для генерування випадкового шістнадцяткового числа. Допустим
//є написання функцій.

exports.num=(min,max)=>{
  let number_10= Math.random() * (max - min) + min;
    
   console.log("task_1 "+number_10.toString(16));

  }
  
 
