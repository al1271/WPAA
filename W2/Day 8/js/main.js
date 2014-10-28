/** Created by alexgarza on 10/16/14.*/
(function () {
    /*    //var dog = {name:"pippi",age:9,breed:"german shepard"}

     var jeffDog = new Dog();
     jeffDog.name="pippi";
     var alexDog = new Dog();
     alexDog.name = "eevee";

     console.log(jeffDog.name);

     var kennel = [jeffDog,alexDog];

     function Dog(){
     console.log("dog created");
     this.name = "";
     this.age = 0;
     this.breed = "";

     }/*

     var name = ["tom", "max", "bob", "scott", "lassie"];
     var maxAge = 15;
     var kennel = [];

     for (i = 0; i < 5; i++) {
     kennel.push(new Dog());
     }

     function Dog() {
     console.log("dog Created");
     var rn = (math.random() * name.length);
     this.name = name[rn];
     name.splice(rn, 1);
     this.age = ~~(Math.random() * maxAge + 1);
     }


     function displayDogs() {

     kennel.forEach(function (e) {

     console.log(e.name)

     })

     }*/
    var students = [];
    var studNum = 0;

    createStudent();
    displayData();
    function displayData(){
        students.forEach(function(e){
            console.log("name : "+ e.name);
            console.log("ID : "+ e.id);
            console.log("Average : "+ e.average());
            console.log("****************")
        })
    }

    function createStudent() {
        classRoom.students.forEach(function (e) {
            var kid = new Kid();

            kid.name = e.name;

            kid.id = e.id;

            kid.grades = e.grades;

            students.push(kid);
        })


    }



    function Kid() {
        this.name = "";

        this.id = 0;

        this.grades = [];

        this.food = "pizza";

    }

    Kid.prototype.eat = function () {



    };

    Kid.prototype.average = function () {

        var total = 0;

        this.grades.forEach(function (e) {

            total += e;

        });

        return total / this.grades.length;

    };




})();