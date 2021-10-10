// Menampilkan data input ke tabel
function terimainput(){
    
    var x = document.forms ['biodata'] ['nim'].value;
    var y = document.forms ['biodata'] ['fullName'].value;
    var z = document.forms ['biodata'] ['gender'].value;
    var a = document.forms ['biodata'] ['fakultas'].value
    var b = document.forms ['biodata'] ['prodi'].value
    
   
    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)


    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
    cell4.innerHTML = a;
    cell5.innerHTML = b;

}

// reset input form
function hapus(){
    document.biodata.reset();
}

// fitur pencarian di tabel
const pencarian = document.querySelector('#pencarian');

pencarian.addEventListener('keyup', searchStudent);

function searchStudent(event) {
    let searchText = event.target.value.toLowerCase();

    let tableOfStudent = [...document.querySelectorAll('td')]
    
    tableOfStudent.forEach((studentData) =>{
        let studentName = studentData.firstChild.textContent;
        
        if(studentName.toLowerCase().indexOf(searchText) != -1){
            studentData.style.display = 'block';
        } else {
            studentData.style.display = 'none';
        }
    });
}

// menghapus data dari tabel
const tabelinput = document.querySelector('tabelinput');

tabelinput.addEventListener('click', removeData);

function removeData(event){
    if(event.target.classList.contains('bi')){
        const td = event.target.parentElement;
        tabelinput.removeChild(td);
    }
}

function myAlert() { 
    alert("Tetap hapus data mahasiswa ini?"); 
} 



// fitur filter fakultas 
const showFaculty = document.querySelector("#showFaculty");

form.addEventListener ('click', filterFaculty);

function filterFaculty(e){
    e.preventDefault();

    let biodata = document.querySelector('#tableBiodata');

    const td = document.querySelector('td');
    td.className = 'td';

    const tdText = document.createTextNode (`${biodata.value}`);
    td.appendChild(tdText);

    const tr = document.querySelector('#fortable');
    tr.appendChild(td);
}

// fitur filter prodi 
const showFaculty = document.querySelector("#showProdi");

form.addEventListener ('click', filterProdi);

function filterProdi(e){
    e.preventDefault();

    let biodata = document.querySelector('#tableBiodata');

    const td = document.querySelector('td');
    td.className = 'td';

    const tdText = document.createTextNode (`${biodata.value}`);
    td.appendChild(tdText);

    const tr = document.querySelector('#fortable');
    tr.appendChild(td);
}




