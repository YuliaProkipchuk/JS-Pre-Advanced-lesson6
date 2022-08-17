const f1 = document.forms.sign;
let check = false;
let warning = document.getElementsByClassName('provide');
let signInButton = f1.signbutton;
let arr = [];
let user;
signInButton.addEventListener('click', function () {
    event.preventDefault();
    if (localStorage.length == 0) {
        warning[1].classList.add('show');
    }
    else {
        arr = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < arr.length; i++) {
            if (f1.signaddress.value == arr[i].email && f1.password.value == arr[i].password) {
                warning[1].classList.remove('show');
                check = true;
                user = Object.assign({},arr[i]);
                localStorage.setItem('active_user', JSON.stringify(user));
                window.open('./page.html', "_self");
                f1.reset();
                break;
            }

        }
        if (!check) {
            warning[1].classList.add('show');
            warning[1].textContent = 'Incorrect email or password';

        }
        check = false;

    }
});

