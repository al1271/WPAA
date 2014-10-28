(function(){

    var person =  new Employee("joe","Mascot",100);

    function Employee(n,d,s){
        this.name = n;
        this.department = d;
        this.salary = s;
        console.log(n,"is created")
    }
    Employee.prototype.hire = function(){
        console.log(this.name +" is hired!")
    };
    Employee.prototype.fire = function(){
        console.log(this.name +" is fired!")
    }


})();