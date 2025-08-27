const increaseBtn = document.getElementById("increase_number");
const decreaseBtn = document.getElementById("decrease_number");
const warningTxt = document.getElementById("warning_text");
const counterDisplay = document.getElementById("counter");
const reset_progress = document.getElementById("reset_button");

const color_indicator = ["green", "red", "blue", "black"];

increaseBtn.addEventListener("click", increment);
decreaseBtn.addEventListener("click", decrement);
reset_progress.addEventListener("click", reset);

let count = 0;
let index = 0;

function increment(){
    if(count >= 10){
        warningTxt.innerHTML = "The number cannot go above 10";
    }else{
        warningTxt.innerHTML = "";
        count++;
        counterDisplay.innerHTML = count;
        if(count > 0){
            counterDisplay.classList.remove(...color_indicator);
            counterDisplay.classList.add(color_indicator[0]);
        }else if(count === 0){
            counterDisplay.classList.remove(...color_indicator);
        }
    } 
}
function decrement(){
    if(count <= -10){
        warningTxt.innerHTML = "The number cannot go below -10";
    }else{
        warningTxt.innerHTML = "";
        count--;
        counterDisplay.innerHTML = count;
        if(count < 0){
            counterDisplay.classList.remove(...color_indicator);
            counterDisplay.classList.add(color_indicator[1]);
        }else if(count === 0){
            counterDisplay.classList.remove(...color_indicator);
        }
    }
}
function reset(){
    count = 0;
    counterDisplay.innerHTML = count;
    warningTxt.classList.remove(...color_indicator); // It is a standard to remove color of certain tags so that there won't be any overlapping colors
    warningTxt.classList.add(color_indicator[2]);
    counterDisplay.classList.remove(...color_indicator);
    counterDisplay.classList.add(color_indicator[3]);
    warningTxt.innerHTML = "Progress has been reset";
}