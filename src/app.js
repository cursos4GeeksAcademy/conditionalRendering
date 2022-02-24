/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//SI DESCOMENTAS ESTO, COMENTA EL OTRO CONTENIDO, SINO , SE ROMPE
/*
window.addEventListener("load", () => {
  alert("La página cargó");
});
//write your code here

  let h1 = document.querySelector("h1");
  let select = document.querySelector("#identidad");
  select.addEventListener("change", evento => {
    let e = evento.target.value;
    if (e === "m") {
      h1.innerHTML = "me identifico con el genero masculino";
    } else if (e === "f") {
      h1.innerHTML = "me identifico con el genero femenino";
    } else if (e === "n") {
      h1.innerHTML = "no me identifico con los generos propuestos";
    } else {
      h1.innerHTML = "";
    }
  });

  let aux = "primary";
  let juego = document.querySelector("#juego");
  let game = document.querySelector("#game");
  game.addEventListener("change", evento => {
    evento.target.value == "moba"
      ? (juego.innerHTML = "puro lol")
      : evento.target.value == "fps"
      ? (juego.innerHTML = "puro cod")
      : (juego.innerHTML = "puro ff");
  });*/

//SI DESCOMENTAS ESTO, COMENTA EL OTRO CONTENIDO, SINO , SE ROMPE
var informacion = " iniciado sesion";
var informacion1 = "no has";
var informacion2 = "si has";
window.onload = () => {
  let info = document.getElementById("info");
  sessionStorage.getItem("login") === null &&
    sessionStorage.setItem("login", "false");
  info.innerHTML = `${informacion1 + informacion}`;

  sessionStorage.getItem("login") === "true"
    ? (info.innerHTML = `${informacion2 + informacion}`)
    : (info.innerHTML = `${informacion1 + informacion}`);

  let inicia = document.getElementById("inicia");
  let cierra = document.getElementById("cierra");

  inicia.addEventListener("click", () => {
    sessionStorage.setItem("login", "true");
    info.innerHTML = `${informacion2 + informacion}`;
  });
  cierra.addEventListener("click", () => {
    sessionStorage.setItem("login", "false");
    info.innerHTML = `${informacion1 + informacion}`;
  });
};
