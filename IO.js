"use strict";

const button = document.querySelector('button');

function click_handler(button) {
    
    button.addEventListener('click', (event) => {
        button.textContent = `Click count: ${event.detail}`;
      });
}

function main {
    click_handler(button)
}