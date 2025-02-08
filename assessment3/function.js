function check(num){
    if(isNaN(num) || num<0 || num>100  || num==""){
        alert("INVALID INPUT");
        return NaN;
    }
    return num;
}


function avgMarkss(totalMarks){
    return totalMarks / 5;
}

function myFunction()
{
    var el = document.getElementById('add_student')
    var sName = prompt("Enter Student Name");
    if(sName==""){
        alert("INVALID INPUT");
        return;
    }
    var sub1 = parseInt(prompt("Enter marks in subject 1 out of 100"));
    if(isNaN(check(sub1))) return;
    var sub2 = parseInt(prompt("Enter marks in subject 2 out of 100"));
    if(isNaN(check(sub2))) return;
    var sub3 = parseInt(prompt("Enter marks in subject 3 out of 100"));
    if(isNaN(check(sub3))) return;
    var sub4 = parseInt(prompt("Enter marks in subject 4 out of 100"));
    if(isNaN(check(sub4))) return;
    var sub5 = parseInt(prompt("Enter marks in subject 5 out of 100"));
    if(isNaN(check(sub5))) return;
    var totalMarks = sub1+sub2+sub3+sub4+sub5;
    var avgMarks = avgMarkss(totalMarks);
    var table = document.getElementById("t1");
    var newRow = table.insertRow(table.rows.length);
    // console.log(newRow.length);
    newRow.insertCell(0).textContent = sName;
    newRow.insertCell(1).textContent = sub1;
    newRow.insertCell(2).textContent = sub2;
    newRow.insertCell(3).textContent = sub3;
    newRow.insertCell(4).textContent = sub5;
    newRow.insertCell(5 ).textContent = sub4;
    newRow.insertCell(6).textContent = totalMarks;
    newRow.insertCell(7).textContent = avgMarks.toFixed(2);

}