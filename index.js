"use strict";

const dodger = document.getElementById("dodger");
const rock = document.getElementById("rock");


document.addEventListener("keydown", function (event) {
  console.log(event);
});

const getMovement = document.getElementById("movement");

const getDeath = document.getElementById("death");

function movingSound() {
    getMovement.currentTime = 0;
    getMovement.play();
}

function deathSound() {
  getDeath.currentTime = 0;
  getDeath.play();
}

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    movingSound();
  }
  else {
    deathSound();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    movingSound();
  } else {
    deathSound();
  }
}


function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
    movingSound();
  } else {
    deathSound();
  }
}


function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    movingSound();
  } else {
    deathSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});
