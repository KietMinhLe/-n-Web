const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
//
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  //
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  //
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  let valid = true;

  if (usernameValue === "") {
    setError(username, "Vui lòng nhập họ tên của bạn !");
    valid = false;
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "vui lòng nhập mật khẩu của bạn !");
    valid = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Mật Khẩu phải có tối thiểu 8 kí tự !");
    valid = false;
  } else {
    setSuccess(password);
  }
  if (valid) {
    alert("Bạn đăng ký thành công");
  }
};

const menu = document.querySelector('ul');


trigger.addEventListener('click', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  menu.classList.toggle('show'); // Thêm hoặc xóa lớp 'show' cho `ul`
});



