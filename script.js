"use strict";

let projects = document.getElementById("projects");
let about = document.getElementById("about");
let home = document.getElementById("home");
const homePageDiv = document.querySelector(".home-page");
const projectsDiv = document.querySelector(".projects-page");
const aboutDiv = document.querySelector(".about-page");

let berlin = document.getElementById("berlin");
let boston = document.getElementById("boston");
let newYork = document.getElementById("new-york");
let hamburg = document.getElementById("hamburg");
let tokyo = document.getElementById("tokyo");
let toronto = document.getElementById("toronto");
const berlinMap = document.querySelector(".berlin-map");
const bostonMap = document.querySelector(".boston-map");
const newYorkMap = document.querySelector(".new-york-map");
const hamburgMap = document.querySelector(".hamburg-map");
const tokyoMap = document.querySelector(".tokyo-map");
const torontoMap = document.querySelector(".toronto-map");

projects.addEventListener("click", function () {
    homePageDiv.classList.add("hidden");
    projectsDiv.classList.remove("hidden");
    aboutDiv.classList.add("hidden");
});

about.addEventListener("click", function () {
    homePageDiv.classList.add("hidden");
    projectsDiv.classList.add("hidden");
    aboutDiv.classList.remove("hidden");
});

home.addEventListener("click", function () {
    homePageDiv.classList.remove("hidden");
    projectsDiv.classList.add("hidden");
    aboutDiv.classList.add("hidden");
});

berlin.addEventListener("click", function () {
    berlinMap.classList.remove("hidden");
    bostonMap.classList.add("hidden");
    newYorkMap.classList.add("hidden");
    hamburgMap.classList.add("hidden");
    tokyoMap.classList.add("hidden");
    torontoMap.classList.add("hidden");
});

boston.addEventListener("click", function () {
    berlinMap.classList.add("hidden");
    bostonMap.classList.remove("hidden");
    newYorkMap.classList.add("hidden");
    hamburgMap.classList.add("hidden");
    tokyoMap.classList.add("hidden");
    torontoMap.classList.add("hidden");
});

newYork.addEventListener("click", function () {
    berlinMap.classList.add("hidden");
    bostonMap.classList.add("hidden");
    newYorkMap.classList.remove("hidden");
    hamburgMap.classList.add("hidden");
    tokyoMap.classList.add("hidden");
    torontoMap.classList.add("hidden");
});

hamburg.addEventListener("click", function () {
    berlinMap.classList.add("hidden");
    bostonMap.classList.add("hidden");
    newYorkMap.classList.add("hidden");
    hamburgMap.classList.remove("hidden");
    tokyoMap.classList.add("hidden");
    torontoMap.classList.add("hidden");
});

tokyo.addEventListener("click", function () {
    berlinMap.classList.add("hidden");
    bostonMap.classList.add("hidden");
    newYorkMap.classList.add("hidden");
    hamburgMap.classList.add("hidden");
    tokyoMap.classList.remove("hidden");
    torontoMap.classList.add("hidden");
});

toronto.addEventListener("click", function () {
    berlinMap.classList.add("hidden");
    bostonMap.classList.add("hidden");
    newYorkMap.classList.add("hidden");
    hamburgMap.classList.add("hidden");
    tokyoMap.classList.add("hidden");
    torontoMap.classList.remove("hidden");
});
