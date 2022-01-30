let header = document.createElement('h1');
header.id = 'header1';
header.textContent = "Warranty Information";
header.innerHTML = "Warranty Information";
document.body.append(header);

let firstNameLabel = document.createElement('label');
firstNameLabel.id = 'firstname';
firstNameLabel.innerHTML = "First Name";
document.body.append(firstNameLabel);

let firstNameInput = document.createElement('input');
firstNameInput.id = 'firstname';
firstNameInput.innerHTML = "First Name";
document.body.append(firstNameInput);