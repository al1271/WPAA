(function(){

    var random = ~~(Math.random()*10+1);
    var guessRm = 3;
    var userIn = 0;
    var dom = {
        input:document.querySelector("#input"),
        btn:document.querySelector("button"),
        output:document.querySelector("#output")
    };
console.log(random);

    dom.btn.addEventListener("click",onGuess);

    function onGuess(){
        parseInt(userIn = dom.input.value);
        if (userIn>=1 && userIn<=10) {
            guessRm--;
            dom.output.innerHTML = "guesses remaining " + guessRm;
            if(guessRm>0) {
                check()
            }
        }else{
            dom.output.innerHTML = "Can you read 1-10...!"
        }

    }

    function check(){
        dom.output.innerHTML = "Guess my magic number between 1-10";
        if (userIn>random){
            dom.output.innerHTML = "too high";

        }else if (userIn<random){
            dom.output.innerHTML = "too low";
        }else{
            dom.output.innerHTML = "Good job you guessed the number."
        }
    }




})();
