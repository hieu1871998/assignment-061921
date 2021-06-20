var studentName, nameExist = [], scienceMark, historyMark, mathMark, englishMark, geographyMark, totalMarks;
var labelError;
function loadData() {
    studentName = document.getElementById("studentName");
    scienceMark = document.getElementById("science");
    historyMark = document.getElementById("history");
    mathMark = document.getElementById("mathematics");
    englishMark = document.getElementById("english");
    geographyMark = document.getElementById("geography");
    formLabel = document.getElementsByClassName("form-label");
    labelError = document.getElementsByClassName("form-label-error");
}
window.onload = loadData;
function submitForm() {
    totalMarks = parseInt(scienceMark.value) + parseInt(historyMark.value) + parseInt(mathMark.value) + parseInt(englishMark.value) + parseInt(geographyMark.value);
    checkValues();   
}
function checkValues() {
    if (studentName.value == "") {
        showAlertBox("alert-name");
        formLabel[0].style.color = "red";
        labelError[0].style.opacity = "1";
        return false;
    }
    if (nameExist.includes(studentName.value)) {
        showAlertBox("alert-name-exist");
        formLabel[0].style.color = "red";
        labelError[0].style.opacity = "1";
        return false;
    }
    if (scienceMark.value == "" || scienceMark.value < 0 || scienceMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[1].style.color = "red";
        labelError[1].style.opacity = "1";
        return false;
    }
    if (historyMark.value == "" || historyMark.value < 0 || scienceMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[2].style.color = "red";
        labelError[2].style.opacity = "1";
        return false;
    }
    if (mathMark.value == "" || mathMark.value < 0 || scienceMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[3].style.color = "red";
        labelError[3].style.color = "red";
        labelError[3].style.opacity = "1";
        return false;
    }
    if (englishMark.value == "" || englishMark.value < 0 || scienceMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[4].style.color = "red";
        labelError[4].style.opacity = "1";
        return false;
    }
    if (geographyMark.value == "" || geographyMark.value < 0 || scienceMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[5].style.color = "red";
        labelError[5].style.opacity = "1";
        return false;
    }
    nameExist.push(studentName.value);
    resetLabel()
    showTable();
    insertRow();
    resetValue();
}
function resetLabel() {
    for (var i = 0; i < formLabel.length; i++) {
        formLabel[i].style.color = "#323130";
        labelError[i].style.opacity = "0";
    }    
}
function resetValue() {
    studentName.value = "";
    scienceMark.value = "";
    historyMark.value = "";
    mathMark.value = "";
    englishMark.value = "";
    geographyMark.value = "";
}
function showTable() {
    var table = document.getElementById("table-container");
    table.style.opacity = "1";
    showAlertBox("alert-success");
}
function insertRow() {
    var table, row, rowCount,cell, i, j;
    table = document.getElementById("table");
    rowCount = table.rows.length;
    if (studentName.value != "") {
        row = table.insertRow(-1);
        for (i = 0; i < table.rows[0].cells.length; i++) {
            cell = row.insertCell(i);
            cell.classList.add("table-content-row", "text-color__dark");
        }
        row.cells[0].innerHTML = studentName.value;
        row.cells[1].innerHTML = scienceMark.value;
        row.cells[2].innerHTML = historyMark.value;
        row.cells[3].innerHTML = mathMark.value;
        row.cells[4].innerHTML = englishMark.value;
        row.cells[5].innerHTML = geographyMark.value;
        row.cells[6].innerHTML = totalMarks;
    }    
}
var alertBox;
function showAlertBox(id) {
    alertBox = document.getElementById(id);
    alertBox.style.opacity = "1";
    setTimeout(hideAlertBox, 3000);
}
function hideAlertBox() {
    alertBox.style.opacity = "0";
}
