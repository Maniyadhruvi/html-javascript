var employee = prompt("how many employee in our company");
var eleave = prompt("how many employee not come in today");
var reason = prompt("employee reason");


console.log("how many employee in our company",employee);
console.log("how many employee not come in today",eleave);
console.log("employee reason",reason);


console.log("Attempt employee:" + employee);

var notattemp = employee-eleave;
console.log("not attempt employee:" + notattemp);


var reasonemp = notattemp-reason;
console.log("reason employee:" + reasonemp);

var totalemp = reasonemp+notattemp;
console.log("Total unAttempt employee:" + totalemp);


let uname;

document.getElementById("btn").onclick = function()
{
    uname = document.getElementById("ename").value;
    //console.log(uname);
    
    document.getElementById("list").textContent = `total employee count is ${uname}`;
   


}





