const form = document.querySelector(".form");
const input = document.querySelector(".input");
const showResultBlock = document.querySelector(".show__block");

let result = 0;

const count = function (ball) {
    result = (ball / 25) * 20;
    return result.toFixed(1);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    input.value = "";
    const ballvalue = Number(input.value);
    const finalResult = count(ballvalue);
    showResultBlock.textContent = finalResult;
});
