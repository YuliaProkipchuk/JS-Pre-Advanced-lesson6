const f1 = document.forms.sign;
let check = false;
let firstnameRegExp = /^[a-zA-Z]{1,20}$/;
let lastnameRegExp = /^[a-zA-Z]{1,20}$/;
let passwordRegExp = /^\w{8,15}$/;
let emailRegExp = /^[\w\.-]{1,}@\w{1,}\.\w{1,}$/;
let warning = document.getElementsByClassName('provide');
let signUpButton = f1.signbutton;
const rightFirstName = document.querySelector('#ch1');
const wrongFirstName = document.querySelector('#wr1');
const rightLastName = document.querySelector('#ch2');
const wrongLastName = document.querySelector('#wr2');
const rightEmail = document.querySelector('#ch3');
const wrongEmail = document.querySelector('#wr3');
const rightPassword = document.querySelector('#ch4');
const wrongPassword = document.querySelector('#wr4');
let arr = [];
let user = {};


signUpButton.addEventListener('click', () => {
    const firstName = f1.firstname.value;
    const lastName = f1.lastname.value;
    const aDdress = f1.address.value;
    const pass = f1.password.value;
    if (firstnameRegExp.test(firstName) && lastnameRegExp.test(lastName) && passwordRegExp.test(pass) && emailRegExp.test(aDdress)) {
        user.first_name = firstName;
        user.last_name = lastName;
        user.email = aDdress;
        user.password = pass;
        console.log('valid')
        if (localStorage.length) {
            arr = JSON.parse(localStorage.getItem('users'));
            console.log(arr);
            console.log(arr.some(address => address.email === user.email));
            console.log(user.email);
            if (arr.some(address => address.email === user.email) == false) {
                arr.push(user);
                localStorage.setItem('users', JSON.stringify(arr));
                console.log('already exist');
                f1.firstname.classList.remove('wrong', 'right');
                wrongFirstName.classList.remove('show');
                rightFirstName.classList.remove('show');
                f1.lastname.classList.remove('wrong', 'right');
                wrongLastName.classList.remove('show');
                rightLastName.classList.remove('show');
                f1.address.classList.remove('right', 'wrong');
                rightEmail.classList.remove('show');
                wrongEmail.classList.remove('show');
                warning[2].classList.remove('show');
                f1.password.classList.remove('wrong', 'right');
                wrongPassword.classList.remove('show');
                rightPassword.classList.remove('show');
                f1.reset();

            }
            else {
                console.log('already exist');
                f1.firstname.classList.remove('wrong');
                f1.firstname.classList.add('right');
                wrongFirstName.classList.remove('show');
                rightFirstName.classList.add('show');
                f1.lastname.classList.remove('wrong');
                f1.lastname.classList.add('right');
                wrongLastName.classList.remove('show');
                rightLastName.classList.add('show');
                f1.address.classList.remove('right');
                f1.address.classList.add('wrong');
                rightEmail.classList.remove('show');
                wrongEmail.classList.add('show');
                warning[2].classList.add('show');
                warning[2].textContent = 'This email already exist';
                f1.password.classList.remove('wrong');
                f1.password.classList.add('right');
                wrongPassword.classList.remove('show');
                rightPassword.classList.add('show');
            }
        }
        else {
            arr.push(user);
            localStorage.setItem('users', JSON.stringify(arr));
            f1.reset();

        }
        console.log('yes')



    }
    else {

        if (!firstnameRegExp.test(firstName)) {
            f1.firstname.classList.remove('right');
            f1.firstname.classList.add('wrong');
            rightFirstName.classList.remove('show');
            wrongFirstName.classList.add('show');
            warning[0].classList.add('show');
        }
        else {
            f1.firstname.classList.remove('wrong');
            f1.firstname.classList.add('right');
            wrongFirstName.classList.remove('show');
            rightFirstName.classList.add('show');
            warning[0].classList.remove('show');
        }

        if (!lastnameRegExp.test(lastName)) {
            f1.lastname.classList.remove('right');
            f1.lastname.classList.add('wrong');
            rightLastName.classList.remove('show');
            wrongLastName.classList.add('show');
            warning[1].classList.add('show');
        }
        else {
            f1.lastname.classList.remove('wrong');
            f1.lastname.classList.add('right');
            wrongLastName.classList.remove('show');
            rightLastName.classList.add('show');
            warning[1].classList.remove('show');
        }
        if (!emailRegExp.test(aDdress)) {
            f1.address.classList.remove('right');
            f1.address.classList.add('wrong');
            rightEmail.classList.remove('show');
            wrongEmail.classList.add('show');
            warning[2].classList.add('show');
            warning[2].textContent = 'Please provide a valid Email address';

        }
        else {
            f1.address.classList.remove('wrong');
            f1.address.classList.add('right');
            wrongEmail.classList.remove('show');
            rightEmail.classList.add('show');
            warning[2].classList.remove('show');
        }
        if (!passwordRegExp.test(pass)) {
            f1.password.classList.remove('right');
            f1.password.classList.add('wrong');
            rightPassword.classList.remove('show');
            wrongPassword.classList.add('show');
            warning[3].classList.add('show');
        }
        else {
            f1.password.classList.remove('wrong');
            f1.password.classList.add('right');
            rightPassword.classList.remove('show');
            wrongPassword.classList.add('show');
            warning[3].classList.remove('show');
        }
    }
})
