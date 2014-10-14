//Alexander Garza 10/04/14 Section 00 Duel #1


// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name damage and health
    var dom = {
        round:document.querySelector("#round_number input"),
        btn:document.querySelector("#fight_btn"),
        scores:document.querySelector("#scores"),
        kabalHP:document.querySelector("#kabal p"),
        kratosHP:document.querySelector("#kratos p")

    };

    var fighter1 = {name:"kabal",damage:15,health:100};
    var fighter2 = {name:"Kratos",damage:15,health:100};


    //initiate round
    var round=0;


    function fight(){
            dom.kabalHP.innerHTML = fighter1.health.valueOf();
            dom.kratosHP.innerHTML = fighter2.health.valueOf();



            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage - minDamage2) + minDamage2);

            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            if (fighter1.health < 0){
                fighter1.health = 0;

            }
            if (fighter2.health < 0 ){
                fighter2.health = 0;
            }


            console.log(fighter1.name+": "+fighter1.health + " " + fighter2.name+":"+fighter2.health);

            dom.kabalHP.innerHTML = fighter1.health.valueOf();
            dom.kratosHP.innerHTML = fighter2.health.valueOf();


            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                dom.round.innerHTML = round.value();
            }


    }


    function winnerCheck(){
        var result="no winner";
        if (fighter1.health<1 && fighter2.health<1)
        {
            result = "You Both Die";
        } else if(fighter1.health<1){
            result =fighter2.name+" WINS!!!"
        } else if (fighter2.health<1)
        {
            result = fighter1.name+" WINS!!!"
        }
       return result;
    }

    /*******  The program gets started below *******/
    dom.btn.addEventListener("click",fight);
})();

