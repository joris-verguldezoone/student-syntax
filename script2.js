const form = document.createElement('form');
form.setAttribute('id', 'myForm');

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('placeholder', 'Enter your name');
nameLabel.appendChild(nameInput);

const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('placeholder', 'Enter your email');
emailLabel.appendChild(emailInput);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(nameLabel);
form.appendChild(document.createElement('br'));
form.appendChild(emailLabel);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton);

const container = document.getElementById('formContainer');
container.appendChild(form);
