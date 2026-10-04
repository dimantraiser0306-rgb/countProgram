const form = document.querySelector(".form");
const input = document.querySelector(".input");
const showResultBlock = document.querySelector(".show__block");

let result = 0;

const count = function (ball) {
    result = 20 * ball / 25;
    return result.toFixed(1);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ballvalue = Number(input.value);
    const finalResult = count(ballvalue);
    showResultBlock.textContent = finalResult;
    input.value = "";
});
