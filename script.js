var studentName, nameExist = [], scienceMark, historyMark, mathMark, englishMark, geographyMark, totalMarks, stdPerf;
var labelError;
function loadVariables() {
    
    scienceMark = document.getElementById("science");
    historyMark = document.getElementById("history");
    mathMark = document.getElementById("mathematics");
    englishMark = document.getElementById("english");
    geographyMark = document.getElementById("geography");
    formLabel = document.getElementsByClassName("form-label");
    labelError = document.getElementsByClassName("form-label-error");
    loadData();
}
function loadData() {
    studentName = document.getElementById("studentName").value;
    var stdN = localStorage.getItem(studentName);
    console.log(stdN);
    if (stdN !== null) {
        studentName = JSON.parse(stdN).stdName;
        scienceMark.value = JSON.parse(stdN).science;
        historyMark.value = JSON.parse(stdN).history;
        mathMark.value = JSON.parse(stdN).math;
        englishMark.value = JSON.parse(stdN).english;
        geographyMark.value = JSON.parse(stdN).geography;
    }
    if (JSON.parse(stdN) == null) {
        scienceMark.value = "";
        historyMark.value = "";
        mathMark.value = "";
        englishMark.value = "";
        geographyMark.value = "";
    }
}
window.onload = loadVariables, loadData;
function submitForm() {
    totalMarks = parseInt(scienceMark.value) + parseInt(historyMark.value) + parseInt(mathMark.value) + parseInt(englishMark.value) + parseInt(geographyMark.value);
    checkValues();
      
}
function saveData() {
    stdPerf = {
        stdName: studentName,
        nameExisted: nameExist,
        science: scienceMark.value,
        history: historyMark.value,
        math: mathMark.value,
        english: englishMark.value,
        geography: geographyMark.value,
        total: totalMarks
    }
    Storage(stdPerf);
}
function Storage(obj) {
    localStorage.setItem(obj.stdName,JSON.stringify(obj));
}
function checkValues() {
    if (studentName == "") {
        showAlertBox("alert-name");
        formLabel[0].style.color = "red";
        labelError[0].style.opacity = "1";
        return false;
    }
    console.log(nameExist);
    if (nameExist.includes(studentName)) {
        showAlertBox("alert-name-exist");
        formLabel[0].style.color = "red";
        labelError[0].style.opacity = "1";
        return false;
    }
    if (scienceMark.value == "" || scienceMark.value < 0 || scienceMark.value > 10) {
        showAlertBox("alert-mark");
        formLabel[1].style.color = "red";
        labelError[1].style.opacity = "1";
        return false;
    }
    if (historyMark.value == "" || historyMark.value < 0 || historyMark.value > 10) {
        showAlertBox("alert-mark");
        formLabel[2].style.color = "red";
        labelError[2].style.opacity = "1";
        return false;
    }
    if (mathMark.value == "" || mathMark.value < 0 || mathMark.value > 10) {
        showAlertBox("alert-mark");
        formLabel[3].style.color = "red";
        labelError[3].style.color = "red";
        labelError[3].style.opacity = "1";
        return false;
    }
    if (englishMark.value == "" || englishMark.value < 0 || englishMark.value > 10) {
        showAlertBox("alert-mark");
        formLabel[4].style.color = "red";
        labelError[4].style.opacity = "1";
        return false;
    }
    if (geographyMark.value == "" || geographyMark.value < 0 || geographyMark.value >10) {
        showAlertBox("alert-mark");
        formLabel[5].style.color = "red";
        labelError[5].style.opacity = "1";
        return false;
    }
    nameExist.push(studentName);
    saveData();
    resetLabel();
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
    document.getElementById("studentName").selectedIndex = 0;
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
    if (studentName != "") {
        row = table.insertRow(-1);
        for (i = 0; i < table.rows[0].cells.length; i++) {
            cell = row.insertCell(i);
            cell.classList.add("table-content-row", "text-color__dark");
        }
        row.cells[0].innerHTML = stdPerf.stdName;
        row.cells[1].innerHTML = stdPerf.science;
        row.cells[2].innerHTML = stdPerf.history;
        row.cells[3].innerHTML = stdPerf.math;
        row.cells[4].innerHTML = stdPerf.english;
        row.cells[5].innerHTML = stdPerf.geography;
        row.cells[6].innerHTML = stdPerf.total;
        
       /*
        row.cells[0].innerHTML = studentName;
        row.cells[1].innerHTML = scienceMark;
        row.cells[2].innerHTML = historyMark;
        row.cells[3].innerHTML = mathMark;
        row.cells[4].innerHTML = englishMark;
        row.cells[5].innerHTML = geographyMark;
        row.cells[6].innerHTML = totalMarks;*/
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
