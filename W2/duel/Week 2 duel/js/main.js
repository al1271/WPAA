//Alexander Garza 10/04/14 Section 00 Duel #1


// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name damage and health
    var fighter1 = {name:"Batman",damage:50,health:100};
    var fighter2 = {name:"Kratos",damage:50,health:100};


    //initiate round
    var round=0;

    function fight(){
        alert(fighter1.name+":"+fighter1.health+"  *START*  "+ fighter2.name+":"+fighter2.health);
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1.damage * .5;
            var minDamage2 = fighter2.damage * .5;
            var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2);

            //inflict damage
            fighter1.health-=f1;
            fighter2.health-=f2;

            console.log(fighter1.name+": "+fighter1.health + " " + fighter2.name+":"+fighter2.health);

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(fighter1.name+":"+fighter2.health+"  *ROUND "+round+" OVER"+"*  "+fighter2.name+":"+fighter2.health);

            } else{
                alert(result);
                break;
            }

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
    fight();

})();