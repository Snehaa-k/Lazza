function login() {
    var redirect = confirm('Click to Login');

    if (redirect) {
        window.location.href = 'https://lazza.co.in/login';
    } else {
        window.history.back();
    }
}

function cart() {

    alert('Your session was logged out plese login for your cart');
    var redirect = confirm('Do you want to login your account ?')
    if (redirect) {
        window.location.href ='https://lazza.co.in/login';
    }
    else {
        window.history.back();
    }
}