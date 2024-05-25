const orderForm = document.getElementById('order-form');
const customerNameInput = document.getElementById('customer-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone-number');
const addressInput = document.getElementById('address');
const successMessage = document.getElementById('success-message');

orderForm.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

const setError = (element ,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay =inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = emailInput =>
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidSDT = phoneInput =>
{
    if (typeof phoneInput !== 'string') {
        return false;
      }
      if (phoneInput.trim() === '') {
        return false;
      }
      return phoneInput.length >= 10;
}

const validateInputs = () =>
{
    const customerNameInputValue = customerNameInput.value.trim();
    const emailInputValue = emailInput.value.trim();
    const phoneInputValue = phoneInput.value.trim();
    const addressInputValue =addressInput.value.trim();

    const isvalue = true;

    if(customerNameInputValue === '')
    {
        setError(customerNameInput,'Vui lòng nhập họ tên của bạn !');
        isvalue =false;
    }
    else 
    {
        setSuccess(customerNameInput);
    }



    if(emailInputValueValue === '') {
        setError(emailInput, 'Vui lòng nhập email của bạn !');
        valid =false;
    } else if (!isValidEmail(emailInputValueValue)) {
        setError(emailInput, 'Email sai!');
    } else {
        setSuccess(emailInput);
    }


    if(phoneInputValue === '')
    {
        setError(phoneInput,'Vui lòng nhập SĐT của bạn !');
        isvalue =false;
    } else if (phoneInputValue.length < 10)
    {
        setError(phoneInput,'SĐT sai !');
    } else 
    {
        setSuccess(phoneInput);
    }

    if(addressInputValue === '')
    {
        setError(addressInput , 'Vui lòng nhập địa chỉ của bạn !');
        isvalue = false;
    }
    else 
    {
        setSuccess(addressInput);
    }
    
    if(isvalue)
    {
        alert('Bạn đã đặt hàng thành công');
    }

}