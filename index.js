var numberOfButtons = document.querySelectorAll("button").length;
console.log(numberOfButtons);

for( var i = 0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {

        var buttonClicked = this.innerHTML;
        playSound(buttonClicked);
        flashButtonPressed(buttonClicked);

    });
}

document.addEventListener("keydown", function (event){
    playSound(event.key);
    flashButtonPressed(event.key);
    
});

function playSound(buttonClicked){

    switch (buttonClicked){
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default : console.log(buttonClicked);
    }
}

function flashButtonPressed(buttonPressed){
    document.querySelector("."+buttonPressed).classList.add("pressed");
    setTimeout( function() {
        document.querySelector("."+buttonPressed).classList.remove("pressed")
    },100);

}