var arrayName=[];
function submit(){
    var name_1 = document.getElementById("student_1").value;
    var name_2 = document.getElementById("student_2").value;
    var name_3 = document.getElementById("student_3").value;
    var name_4 = document.getElementById("student_4").value;
    var name_5 = document.getElementById("student_5").value;
    var name_6 = document.getElementById("student_6").value;
    var name_7 = document.getElementById("student_7").value;
    var name_8 = document.getElementById("student_8").value;  
    var name_9 = document.getElementById("student_9").value;
    var name_10 = document.getElementById("student_10").value;

    arrayName.push(name_1);
    arrayName.push(name_2);
    arrayName.push(name_3);
    arrayName.push(name_4);
    arrayName.push(name_5);
    arrayName.push(name_6);
    arrayName.push(name_7);
    arrayName.push(name_8);
    arrayName.push(name_9);
    arrayName.push(name_10);

    console.log(arrayName);
    document.getElementById("displayName").innerHTML=arrayName;
    document.getElementById("b_1").style.display="none";
    document.getElementById("b_2").style.display="inline-block";
}

function sorting(){
    arrayName.sort();
    console.log(arrayName);
    document.getElementById("displayName").innerHTML=arrayName;
}