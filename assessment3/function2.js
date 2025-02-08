function check(num) {
    if (num > 100 || num < 0 || num === "" || isNaN(num)) {
      alert("Invalid Input");
      return undefined;
    }
    return num;
  }
  
  function calculateAvg(totalMarks) {
    return totalMarks / 5;
  }
  
  if (!localStorage.getItem("Students")) {
    localStorage.setItem("Students", JSON.stringify([]));
  }
  
  function loadStudent() {
    var students = JSON.parse(localStorage.getItem("Students"));
    var table = document.getElementById("t1");
    table.innerHTML = "";
    students.forEach(function (student) {
      var row = table.insertRow();
      row.insertCell(0).textContent = student.sName;
      row.insertCell(1).textContent = student.sub1;
      row.insertCell(2).textContent = student.sub2;
      row.insertCell(3).textContent = student.sub3;
      row.insertCell(4).textContent = student.sub4;
      row.insertCell(5).textContent = student.sub5;
      row.insertCell(6).textContent = student.tMarks;
      row.insertCell(7).textContent = student.Average.toFixed(2);
    });
  }
  
  function main() {
    var button = document.getElementById("add_student");
    if (button) {
      button.addEventListener("click", myFunction);
    }
    loadStudent();
  }
  
  function myFunction() {
    var sName = prompt("Enter Student's Name");
    if (!sName) {
      alert("INVALID INPUT!!");
      return;
    }
  
    var sub1 = parseInt(prompt("Enter Marks of Subject 1"));
    if (!check(sub1)) return;
  
    var sub2 = parseInt(prompt("Enter Marks of Subject 2"));
    if (!check(sub2)) return;
  
    var sub3 = parseInt(prompt("Enter Marks of Subject 3"));
    if (!check(sub3)) return;
  
    var sub4 = parseInt(prompt("Enter Marks of Subject 4"));
    if (!check(sub4)) return;
  
    var sub5 = parseInt(prompt("Enter Marks of Subject 5"));
    if (!check(sub5)) return;
  
    var tMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    var avg = calculateAvg(tMarks);
  
    var details = {
      sName: sName,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      sub4: sub4,
      sub5: sub5,
      tMarks: tMarks,
      Average: avg,
    };
  
    var students = JSON.parse(localStorage.getItem("Students"));
    students.push(details);
    localStorage.setItem("Students", JSON.stringify(students));
  
    loadStudent(); // Reload table to include the new student
  }
  
  // Ensure the main function is called after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", main);
  