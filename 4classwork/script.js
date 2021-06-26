
function gradescore()
 {
   
    let score = document.getElementById('score').value;
if (score >= 50){ document.getElementById('pass').innerHTML = "Passed";
}
else{
    document.getElementById('fail').innerHTML = "Failed";
}
 }
