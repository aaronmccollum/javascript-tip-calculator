let calculateTip = () => {
    let myBillInput = document.getElementById("userAmount").value;
    let numPeople = document.getElementById("numPeople").value;
    let tipPerc = document.getElementById("tipPercentage").value;
    let dividedBill = roundToTwo(myBillInput / numPeople);
    let tipResult = roundToTwo((myBillInput * (tipPerc * .01)) / numPeople);

    function roundToTwo(num) {    
        return +(Math.round(num + "e+2")  + "e-2");
    }
                
    document.querySelector("#resultDiv").innerHTML +="<p>Each person's bill is: $" + dividedBill + "</p>" + "<p>Each person's tip is: $" + tipResult + "</p>";
}