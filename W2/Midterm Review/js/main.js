/**
 * Created by alexgarza on 10/9/14.
 */

(function(){
    var student = {name:"Alex", grades:[90,80,95],
        address:{street:"3250 bishop park", city:"Orlando"}
        };
    var student2 = {name:"Tom", grades:[50,20,15],
        address:{street:"12340 yes park", city:"Orlando"}
        };
    var student3 = {name:"no", grades:[20,50,55],
        address:{street:"12340 akda", city:"tampa"}
    };
    var students = [student,student2,student3];
    var studentN = 0;

    var dom = {
        name:document.querySelector("#name"),
        address:document.querySelector("#address"),
        btn:document.querySelector("button")
    };

    dom.btn.addEventListener("click",display);
    display();


    function display(){
        dom.name.innerHTML = students[studentN].name;
        dom.address.innerHTML = students[studentN].address.street + " " + students[studentN].address.city;
        studentN++;
        if(studentN == students.length){
            studentN = 0;
        }
    }

    function gpa(stud){

        var grades = stud;
        return grades


    }

    gpa(student.grades);


}());