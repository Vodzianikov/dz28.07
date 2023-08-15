const input = document.querySelector('.color');
const button = document.querySelector('.button');
const ol = input.hasAttribute(".color") 


button.addEventListener('click', function () {
    if (input.value === "red") {
        button.addEventListener('click', function () {
            button.classList.add("red")
        })
    }else if(input.value === "green"){
        button.classList.add("green")
    }else if(input.value === "blue"){
        button.classList.add("blue")
    }
});
// button.addEventListener('click', function () {
//     if (input.value === "green") {
//         button.addEventListener('click', function () {
//             button.classList.add("green")
//         });
//     }
// });
// button.addEventListener('click', function () {
//     if (input.value === "blue") {
//         button.addEventListener('click', function () {
//             button.classList.add("blue")
//         });
//     }
// });