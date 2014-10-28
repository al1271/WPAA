/*
 Developed by the JavaScript team at Fullsail
 Date: 1306
 */

(function () {
    var dom = {
        user: document.querySelector('#f_username'),
        email: document.querySelector('#f_email'),
        phone: document.querySelector('#f_phone'),
        pass: document.querySelector('#f_password'),
        ssn: document.querySelector('#f_ssn'),
        form: document.querySelector('#f_submit')

    };


    function onClick(e) {

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(dom.user);//id = is the form input field ID
        validateField(dom.email);
        validateField(dom.phone);
        validateField(dom.pass);
        validateField(dom.ssn);
        e.preventDefault();
        return false;
    }

    dom.form.addEventListener('click', onClick);

    var validateField = function (inputName) {

        if (inputName.name === 'f_username') {
            pattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;

        } else if (inputName.name === 'f_email') {
            pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.
        } else if (inputName.name === 'f_phone') {
            pattern = /^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/;

        } else if (inputName.name === 'f_password') {
            pattern = /^(?=.*\d).{4,8}$/;

        } else if (inputName.name === 'f_ssn') {
            pattern = /^\d{3}-\d{2}-\d{4}$/;
        }

        var pass = pattern.test(inputName.value);

        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2) {
            errorMsg.style.display = 'block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5) {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display = 'none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();  // end wrapper



