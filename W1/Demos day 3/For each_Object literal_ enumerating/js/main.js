(function () {
    var stuff = [80, 90, 100];
    var trash = [5,9,23,"scott",8,9,11];

    var NSCdog = ["pit bull", "black", "max", 7];
    var cDog = {breed:"Pit bull",color:"black",name:"max",age:7}
    var cat ={};
    cat.name = "yes";

    console.log(cDog.color);
    console.log(cDog["color"]);


    for (var p in cDog){
         console.log(p);
    console.log(p, cDog[p];)

    }




}());

//   // enumerate(stuff);
//    console.log(getAverage(stuff));
//    //enumerate(trash);
//
//
//    function enumerate(a) {
////        for (var i=0;i< a.length;i++){
////            console.log(i);
////        }
//
//        a.forEach(function (e) {
//            console.log("cool")
//
//        })
//    }
//    function getAverage(n){
//        var total=0;
//        n.forEach(function(e){
//            total+=e;
//
//
//        });
//        return total/ n.length;
//    }
//
//
//
//(function(a) {
//    confirm(cool([2,"bob",4,"Joe", 7]));
//    var counter = 0;
//    function cool(arr,t){
//    arr.forEach(function(e){
//        //console.log(typeof e);
//        if(typeof e == t){
//            counter++;
//        }
//    });
//        return counter
//
//    }
//
//})();



