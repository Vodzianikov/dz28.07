const buttomRed = document.querySelector(".buttomRed")
const buttomBlue = document.querySelector(".buttomBlue")
const buttomGreen = document.querySelector(".buttomGreen")
const buttomEllow = document.querySelector(".buttomEllow")
const wrapper = document.querySelector(".wrapper")
const ul = document.createElement('ul');
ul.className = "ulS"
wrapper.prepend(ul)
console.log(ul)
buttomRed.addEventListener('click', function () {
    const li = document.createElement('li');
    li.className = "ilSRed"
    ul.prepend(li)
    li.prepend("RED")
    setTimeout(() => {
        li.replaceWith("")
    }, 3000);
});
buttomBlue.addEventListener('click', function () {
    const li = document.createElement('li');
    li.className = "ilSBlue"
    ul.prepend(li)
    li.prepend("BLUE")
    setTimeout(() => {
        li.replaceWith("")
    }, 3000);
});
buttomGreen.addEventListener('click', function () {
    const li = document.createElement('li');
    li.className = "ilSGreen"
    ul.prepend(li)
    li.prepend("GREEN")
    setTimeout(() => {
        li.replaceWith("")
    }, 3000);
});
buttomEllow.addEventListener('click', function () {
    const li = document.createElement('li');
    li.className = "ilSEllow"
    ul.prepend(li)
    li.prepend("ELLOW")
    setTimeout(() => {
        li.replaceWith("")
    }, 3000);
});