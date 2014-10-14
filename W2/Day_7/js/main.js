/**
 * Created by alexgarza on 10/14/14.
 */
console.log("loaded");

(function(){

var d= new Date();
    //console.log(d.getDate());
    console.log(d.getMonth()+1);
    console.log(d.getFullYear());


    var month = d.getMonth()+1;
    var date = d.getDate();
    var year = d.getFullYear();

    var coolDate = month + '/' + date + '/'  + year;
    console.log(coolDate);

    var days = ['mon','tuse','wed','thurs','fri','sat','sun']
})();