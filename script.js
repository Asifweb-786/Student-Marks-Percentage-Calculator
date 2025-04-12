// let firstNum = parseFloat(prompt("Enter first number"));
// let opert = prompt("Enter opertar exmp(+,-,*,/)");
// let secNum = parseFloat(prompt("Enter secound number"));
// let result;
// if (isNaN(firstNum) || isNaN(secNum)) {
//   alert("invalid input! please try again")
// } else {
//   switch (opert) {
//     case "+":
//       result = firstNum + secNum;
//       document.writeln("Result is : " + result);
//       break;
//     case "-":
//       result = firstNum - secNum;
//       document.writeln("Result is : " + result);
//       break;
//     case "*":
//       result = firstNum * secNum;
//       document.writeln("Result is : " + result);
//       break;
//     case "/":
//       result = firstNum / secNum;
//       document.writeln("Result is : " + result);
//       break;
//     case "%":
//       result = firstNum % secNum;
//       document.writeln("Result is : " + result);
//       break;
//     case "**":
//       result = firstNum ** secNum;
//       document.writeln("Result is : " + result);
//       break;
//     default:
//       alert("invalid operator");
//   }
// }
function calculateGrade(){
let eng = parseFloat(document.getElementById("eng").value);
let urdu = parseFloat(document.getElementById("urdu").value);
let math = parseFloat(document.getElementById("math").value);
let phy = parseFloat(document.getElementById("phy").value);
let comp = parseFloat(document.getElementById("comp").value);
let totalMarks = eng + urdu + math + phy + comp;
let totalperc = (totalMarks / 500) * 100 ;

if (
  isNaN(eng) || isNaN(urdu) || isNaN(math) || isNaN(phy) || isNaN(comp) ||
  eng < 0 || urdu < 0 || math < 0 || phy < 0 || comp < 0 ||
  eng > 100 || urdu > 100 || math > 100 || phy > 100 || comp > 100
) {
  alert("❌ Please enter valid marks between 0 and 100.");
}
else if (totalperc >= 90 && totalperc <= 100) {
  alert("Total Marks : 500 \n" +
    "obtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\ngrade : A+");
} else if (totalperc >= 80 && totalperc < 90) {
  alert("Total Marks : 500 \n" +
    "obtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\ngrade: A");
} else if (totalperc >= 70 && totalperc < 80) {
  alert("Total Marks : 500 \n" +
    "obtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\ngrade: B");
} else if (totalperc >= 60 && totalperc < 70) {
  alert("Total Marks : 500 \n" +
    "obtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\ngrade: c");
} else if (totalperc >= 50 && totalperc < 60) {
  alert("Total Marks : 500 \n" +
    "obtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\ngrade: D");
} else {
  alert("Total Marks : 500 " +
    "\nobtained Marks : " + totalMarks +
    "\npercentage : " + totalperc +
    "\nyour fail")
}

}



