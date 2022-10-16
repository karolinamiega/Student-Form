let form = document.querySelector("form");
let h2 = document.querySelector("h2");
let submitButton = document.querySelector("#submit");
let name = document.querySelector("#name");
let surname = document.querySelector("#surname");
let age = document.querySelector("#age");
let phone = document.querySelector("#phone");
let email = document.querySelector("#email");
let range = document.querySelector("#range");
let zinios = document.querySelector("#zinios");
let radios = document.querySelector("#radios");
let body = document.body;
let checkboxes = document.querySelector("#checkboxes");
let studentList = document.querySelector("#students-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let surname = document.querySelector("#surname").value;
  let age = document.querySelector("#age").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let range = document.querySelector("#range").value;
  let radio = document.querySelector('input[name="radio"]:checked').value;
  let studentItem = document.createElement("div");
  studentItem.classList.add("student-item");
  studentList.prepend(studentItem);
  let checkbox = document.querySelector('input[name="checkbox"]:checked').value;

  let inputErrorMessages = event.target.querySelectorAll(".alert-message");

  inputErrorMessages.forEach((message) => {
    message.remove();
  });

  let requiredInput = event.target.querySelectorAll(".required");

  let formIsValid = true;

  requiredInput.forEach((input) => {
    input.removeAttribute("style");

    if (!input.value) {
      formIsValid = false;
      input.style = `border-color: red;`;
      let alertMessage = document.createElement("span");
      alertMessage.textContent = "Šis laukelis yra privalomas";
      alertMessage.classList.add("alert-message");

      input.after(alertMessage);
    } else if (input.name === "name") {
      if (input.value.length < 3) {
        formIsValid = false;
        inputValidation(input, "Vardas privalo būti bent 3 simbolių ilgumo");
      }
    } else if (input.name === "surname") {
      if (input.value.length < 3) {
        formIsValid = false;
        inputValidation(input, "Pavardė privalo būti bent 3 simbolių ilgumo");
      }
    } else if (input.name === "age") {
      if (input.value < 0) {
        formIsValid = false;
        inputValidation(input, "Amžius privalo būti teigiamas skaičius");
      } else if (input.value > 120) {
        formIsValid = false;
        inputValidation(input, "Įvestas amžius yra per didelis");
      }
    } else if (input.name === "phone") {
      if (input.value.length < 9 || input.value.length > 12) {
        formIsValid = false;
        inputValidation(input, "Įvestas telefono numeris yra neteisingas");
      }
    } else if (input.name === "email") {
      let atposition = input.value.indexOf("@");
      let dotposition = input.value.lastIndexOf(".");
      if (input.value < 8 || atposition < 1 || dotposition === -1) {
        formIsValid = false;
        inputValidation(input, "Įvestas elektroninis paštas yra neteisingas");
      }
    }
    function inputValidation(input, text) {
      input.style = `border-color: red;`;
      let alertMessage = document.createElement("span");
      alertMessage.textContent = text;
      input.classList.add("border-red");
      alertMessage.classList.add("alert-message");
      input.after(alertMessage);
    }
  });

  if (!formIsValid) {
    let errorMessage = "Visi laukai privalo būti užpildyti!";
    addSpan(errorMessage, "color-red");
    return;
  }

  let createdStudentText = `Sukurtas studentas (${name} ${surname})`;
  addSpan(createdStudentText);

  let showInfo = document.createElement("button");
  showInfo.classList.add("show");
  showInfo.textContent = "Rodyti asmens duomenis";

  let deleteUser = document.createElement("button");
  deleteUser.textContent = "Ištrinti studentą";

  showInfo.addEventListener("click", (event) => {
    event.preventDefault();

    let privateEmail = studentItem.querySelector(".hidden-area-email");
    let privateNumber = studentItem.querySelector(".hidden-area-number");

    if (showInfo.classList.contains("show")) {
      showInfo.textContent = "Slėpti asmens duomenis";
      privateEmail.textContent = email;
      privateNumber.textContent = phone;
    } else {
      showInfo.textContent = "Rodyti asmens duomenis";
      privateEmail.textContent = "****";
      privateNumber.textContent = "****";
    }

    showInfo.classList.toggle("show");
  });

  deleteUser.addEventListener("click", (event) => {
    event.preventDefault();
    studentItem.remove();
    let removedStudentText = `Studentas ${name} ${surname} ištrintas`;
    addSpan(removedStudentText);
  });

  studentItem.innerHTML = `Vardas:  ${name} <br> Pavardė: ${surname} <br> Amžius: ${age} <br> Telefono numeris: <span class="hidden-area-number">****</span><br> El. paštas: <span class="hidden-area-email">****</span> <br> IT žinios: ${range} <br> Grupė: ${radio} <br> Programa, kuri domina: ${checkbox}`;
  studentItem.append(showInfo);
  studentItem.append(deleteUser);

  form.reset();
  function addSpan(text, elementClass) {
    let message = document.createElement("span");
    message.classList.add("span");
    h2.after(message);
    message.textContent = text;
    if (elementClass) {
      message.classList.add(elementClass);
    }
    message.style = `font-size: 12px;
                        display: block;
                        width: 300px;
                        margin: 10px auto;
                        font-family: 'Montserrat', Arial, sans-serif;
                        text-transform: uppercase;`;

    setTimeout(() => {
      message.textContent = "";
      message.classList.remove("span");
      message.classList.remove(elementClass);
    }, 5000);
  }

  studentItem.style = `margin: 0 auto;
                        font-family: 'Montserrat', Arial, sans-serif;
                        font-size: 14px;
                        text-transform: uppercase;
                        border: 1px solid black;
                        width: 450.89px;
                        height: auto;
                        padding: 10px 15px;`;
  showInfo.style = `border: 1px solid;
    margin-top: 20px;
    background-color: #eae4e0;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 10px 25px;
    text-transform: uppercase;`;
  deleteUser.style = `border: 1px solid;
    margin-top: 20px;
    margin-left: 10px;
    background-color: #eae4e0;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 10px 25px;
    text-transform: uppercase;`;
});

range.addEventListener("change", (event) => {
  event.preventDefault();

  let range = document.querySelector("#range");
  let output = document.querySelector("#knowledge-output");

  range.after(output);
  output.innerHTML = range.value;
  output.style = `float: left;
                    margin-top: 20px;
                    margin-left: 5px;
                    font-family: 'Montserrat', Arial, sans-serif;`;
});
