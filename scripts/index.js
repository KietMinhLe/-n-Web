const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let valid = true;

    if(usernameValue === '') {
        setError(username, 'Vui lòng nhập họ tên của bạn !');
        valid =false;
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Vui lòng nhập email của bạn !');
        valid =false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email sai!');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'vui lòng nhập mật khẩu của bạn !');
        valid =false;
    } 
    else if (passwordValue.length < 8 ) {
        setError(password, 'Mật Khẩu phải có tối thiểu 8 kí tự !')
        valid =false;

    } 
    else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Vui lòng xác nhận lại mật khẩu của bạn !');
        valid =false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Xác nhận thất bại !");
        valid = false;
    } else {
        setSuccess(password2);
    }


    if(valid)
    {
        alert('Bạn đăng ký thành công');
        window.location.href='index.html';
    }
};

// const menu = document.querySelector('ul');
// const trigger = document.querySelector('a');

trigger.addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  menu.classList.toggle('show'); // Thêm hoặc xóa lớp 'show' cho `ul`
});




















































































































