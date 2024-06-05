// let input = document.getElementById('addup')
let btn = document.getElementById('btn')
let span = document.getElementById('result')

// function addUp(){
    
// }


// const answer = document.getElementById('ans');
// const btn = document.getElementById('button');

// button.addEventListener('click', () => {
//   if (array.length) {
    
//   } 
// })


btn.addEventListener("click", addUp);

    function addUp() {
        let inputArray = document.getElementById("addup").value;
        let array = inputArray.split(",");
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
        }
        span.textContent = "Ans: " + sum;
    }