const orderForm = document.getElementById('order-form');
const customerNameInput = document.getElementById('customer-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone-number');
const addressInput = document.getElementById('address');
const successMessage = document.getElementById('success-message');


orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    validateInputs();
  const isValid = validateCustomerInfo();

//   if (isValid) {

    // successMessage.textContent = 'Đặt hàng thành công!';
    // setTimeout(() => {
    //   successMessage.textContent = '';

    //   customerNameInput.value = '';
    //   emailInput.value = '';
    //   phoneInput.value = '';
    //   addressInput.value = '';
    // }, 2000);
//   }
});

function validateCustomerInfo() {
  let isValid = true;
  if (customerNameInput.value.trim() === '') {
    setError(customerNameInput, 'Vui lòng nhập họ tên của bạn!');
    isValid = false;
  } else {
    setSuccess(customerNameInput);
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Vui lòng nhập email của bạn!');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    setError(emailInput, 'Email sai!');
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  // Validate phone number (optional, add additional validation if needed)
  if (phoneInput.value.trim() === '') {
    setError(phoneInput, 'Vui lòng nhập số điện thoại của bạn!');
    isValid = false;
  } else {
    setSuccess(phoneInput);
  }

  
  if (addressInput.value.trim() === '') {
    setError(addressInput, 'Vui lòng nhập địa chỉ của bạn!');
    isValid = false;
  } else {
    setSuccess(addressInput);
  }

  return isValid;
}

// Function to set error message and class for an input field
function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

// Function to set success message and class for an input field
function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

// Function to validate email format
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}