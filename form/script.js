let form = document.querySelector('form');
let h2 = document.querySelector('h2');
let submitButton = document.querySelector('#submit');
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let age = document.querySelector('#age');
let phone = document.querySelector('#phone');
let email = document.querySelector('#email');
let range = document.querySelector('#range');
let zinios = document.querySelector('#zinios');
let radios = document.querySelector('#radios');
let body = document.body;
let checkboxes = document.querySelector('#checkboxes');
let studentList = document.querySelector('#students-list')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = document.querySelector('#age').value;
    let phone = document.querySelector('#phone').value;    
    let email = document.querySelector('#email').value;
    let range = document.querySelector('#range').value;
    let radio = document.querySelector('input[name="radio"]:checked').value;
    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');
    studentList.prepend(studentItem);
    let checkbox = document.querySelector('input[name="checkbox"]:checked').value;


    addSpan(name, surname);
    window.setTimeout(removeSpan, 5000);

    let showInfo = document.createElement('button');
    showInfo.classList.add('show');
    showInfo.textContent = 'Rodyti asmens duomenis';

    let deleteUser = document.createElement('button');
    deleteUser.textContent = 'Ištrinti studentą';

    showInfo.addEventListener('click', (event) => {
        event.preventDefault();
        
        let privateEmail = studentItem.querySelector('.hidden-area-email');
        let privateNumber = studentItem.querySelector('.hidden-area-number');
        
        if(showInfo.classList.contains('show')){
            showInfo.textContent = 'Slėpti asmens duomenis';
            privateEmail.textContent = email;
            privateNumber.textContent = phone;
        } else {
            showInfo.textContent = 'Rodyti asmens duomenis';
            privateEmail.textContent = '****';
            privateNumber.textContent = '****';
        }

        showInfo.classList.toggle('show');
    });

    deleteUser.addEventListener('click', (event) => {
        event.preventDefault();
        studentItem.remove();
        addRemovedStudentSpan(name, surname);
        window.setTimeout(removeRemovedStudentSpan, 3000);
    })

    studentItem.innerHTML = `Vardas:  ${name} <br> Pavardė: ${surname} <br> Amžius: ${age} <br> Telefono numeris: <span class="hidden-area-number">****</span><br> El. paštas: <span class="hidden-area-email">****</span> <br> IT žinios: ${range} <br> Grupė: ${radio} <br> Programa, kuri domina: ${checkbox}`;
        studentItem.append(showInfo); 
        studentItem.append(deleteUser);


    form.reset();
    
    studentItem.style = `margin-top: 20px;
                        margin-bottom: 10px;
                        margin-left: 220px;
                        font-family: 'Montserrat', Arial, sans-serif;
                        font-size: 14px;
                        text-transform: uppercase;
                        border: 1px solid black;
                        width: 450.89px;
                        height: auto;
                        padding: 10px 15px;`
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
    text-transform: uppercase;`
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
    text-transform: uppercase;`
  
});

range.addEventListener('change', (event) =>{
    event.preventDefault();

    let range = document.querySelector('#range');
    let output = document.querySelector('#knowledge-output');

    range.after(output);
    output.innerHTML = range.value;
    output.style = `margin-left: 5px;
                    font-family: 'Montserrat', Arial, sans-serif;`
});

function addSpan(personName, personSurname){
    let message = document.createElement('span');
    h2.after(message);
    message.innerHTML = `Sukurtas studentas (${personName} ${personSurname})`;
    message.style = `color: red;
                    font-size: 12px;
                    display: block;
                    margin-top: 20px;
                    margin-left: 220px;
                    font-family: 'Montserrat', Arial, sans-serif;
                    text-transform: uppercase;`
}

function removeSpan(){
    let message = document.querySelector('span');
    message.style.visibility = "hidden";
    
}
function addRemovedStudentSpan(deletedName, deletedSurname){
    let message2 = document.createElement('span');
    h2.after(message2);
    message2.textContent = `Studentas ${deletedName} ${deletedSurname} sėkmingai ištrintas`;
    message2.style = `color: green;
                    font-size: 12px;
                    display: block;
                    margin-top: 20px;
                    margin-left: 220px;
                    font-family: 'Montserrat', Arial, sans-serif;
                    text-transform: uppercase;`
}
function removeRemovedStudentSpan(){
    let message2 = document.querySelector('span');
    message2.style.visibility = "hidden";
}



