let physics = document.querySelector('.physics');
let chemistry = document.querySelector('.chemistry');
let bio = document.querySelector('.bio');
let math = document.querySelector('.math');
let computer = document.querySelector('.computer');
let guesspaper = document.querySelector('.guesspaper');

physics.addEventListener('click', () => {
    window.location = "assets/pages/physics/chooseClasses.html";
})

chemistry.addEventListener('click', () => {
    // window.location = "assets/pages/physics/chooseClasses.html";
    alert("Chemistry is Comming Soon!")
})

bio.addEventListener('click', () => {
    // window.location = "assets/pages/physics/chooseClasses.html";
    alert("Biology is Comming Soon!")
})

math.addEventListener('click', () => {
    // window.location = "assets/pages/physics/chooseClasses.html";
    alert("Math is Comming Soon!")
})

computer.addEventListener('click', () => {
    // window.location = "assets/pages/physics/chooseClasses.html";
    alert("Computer is Comming Soon!")
})
guesspaper.addEventListener('click', () => {
        window.location = "assets/pages/guess paper/guesspaper.html";
})
