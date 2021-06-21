"use strict";
document.getElementById('button').addEventListener('click', (event) => {
    event.preventDefault();
    const num = parseFloat(document.getElementById('num').value);
    const userSelect = document.getElementById('select').value;
    if (isNaN(num)) {
        document.getElementById('output').innerHTML = `<p class="text-warning">Please enter a valid value</p>`;
        document.getElementById('num').value = "";
    }
    else {
        if (userSelect == "tofixed") {
            if (num.toFixed(3) == num) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                document.getElementById('num').value = "";
            }
            else {
                document.getElementById('output').innerHTML = `<p class="text-success">${num} rounded to the 3<sup>rd</sup> decimal digit is ${num.toFixed(3)} </p>`;
                document.getElementById('num').value = "";
            }
        }
        else if (userSelect == "round") {
            if (Math.round(num) == num) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                document.getElementById('num').value = "";
            }
            else {
                document.getElementById('output').innerHTML = `<p class="text-success">${num} rounded to the nearest integer is ${Math.round(num)}</p>`;
                document.getElementById('num').value = "";
            }
        }
        else if (userSelect == "ceil") {
            if (Math.ceil(num) == num) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                document.getElementById('num').value = "";
            }
            else {
                document.getElementById('output').innerHTML = `<p class="text-success">${num} rounded a number up to the next largest integer is ${Math.ceil(num)}</p>`;
                document.getElementById('num').value = "";
            }
        }
        else if (userSelect == "floor") {
            if (Math.floor(num) == num) {
                document.getElementById('output').innerHTML = `<p class="text-warning">The number is already rounded</p>`;
                document.getElementById('num').value = "";
            }
            else {
                document.getElementById('output').innerHTML = `<p class="text-success">the largest integer less than or equal to ${num} is ${Math.floor(num)}</p>`;
                document.getElementById('num').value = "";
            }
        }
    }
});
