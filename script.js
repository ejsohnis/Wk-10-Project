
//this button vairable stores the submit button  so when the user
//click it, it allows the user to add a new row to the table


let button = document.getElementById('new-btn')
button.addEventListener('click', () => {
    console.log('Submit');


    // the program has to find 'list' that represent everything in the table
    //and then to insert a row
    let table = document.getElementById('list');
    let row = table.insertRow();

    //here I insert all the info from the input and writing it into an empty row then when
    //I click submit it will add this row to the table
    row.insertCell(0).innerHTML = document.getElementById('First-Name').value;
    row.insertCell(1).innerHTML = document.getElementById('Last-Name').value;
    row.insertCell(2).innerHTML = document.getElementById('Email').value;
    row.insertCell(3).innerHTML = document.getElementById('Position').value;

    row.insertCell(4).innerHTML = document.getElementById('First-Date').value;
    row.insertCell(5).innerHTML = document.getElementById('End-Date').value;



});


