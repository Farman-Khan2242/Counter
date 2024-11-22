let num = 0;
let counter = document.querySelector('.counter');
// let reset = document.querySelector("#reset-btn");
function incraeseCounter(){
    num++;
    counter.innerHTML = num
}
function resetCounter(){
    counter.innerHTML = 0;
    num = 0;
}