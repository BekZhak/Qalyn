/* THIS IS FIERST TRY - FAILED
//Education level//
const eduOptions = document.querySelectorAll('.edu');
//console.log(eduOptions);//
const degree = [
    {
        name: '',
        coefficient: ''
    },
    {
        name: 'bachelor',
        coefficient: 1.5
    },
    {
        name: 'college',
        coefficient: 1.2
    },
    {
        name: 'high_school',
        coefficient: 1.05
    },
    {
        name: 'middle_school',
        coefficient: 0.9
    },
]

let currentCoefficient = degree[0].coefficient;
//console.log(currentCoefficient)//

for(let edu of eduOptions) {
    edu.addEventListener('click', () => {
        console.log(edu);
    })
} */


// :( //

//THIS IS 2 TRY. IT DOESN'T WORK TOO:( I DON'T KNOW WHAT IS WRONG//
document.getElementById("submit").onclick = function () {
    let arr = [];
    let total = 500;

    let graduate = document.getElementById("education").value;
    arr.push(graduate);

    let netWorth = document.getElementById("networth").value;
    arr.push(netWorth);
    let skill1 = document.getElementById("skill1").checked;
    if (skill1) {
        arr.push(document.getElementById("skill1").value);
    }

    let skill2 = document.getElementById("skill2").checked;
    if (skill2) {
        arr.push(document.getElementById("skill2").value);
    }

    let skill3 = document.getElementById("skill3").checked;
    if (skill3) {
        arr.push(document.getElementById("skill3").value);
    }

    let skill4 = document.getElementById("skill4").checked;
    if (skill4) {
        arr.push(document.getElementById("skill4").value);
    }

    let between18 = document.getElementById("between18").checked;
    if (between18) {
        arr.push(document.getElementById("between18").value);
    }

    let between24 = document.getElementById("between24").checked;
    if (between24) {
        arr.push(document.getElementById("between24").value);
    }

    let moreThan28 = document.getElementById("28+").checked;
    if (moreThan28) {
        arr.push(document.getElementById("28+").value);
    }

    let rep1 = document.getElementById("rep1").checked;
    if (rep1) {
        arr.push(document.getElementById("rep1").value);
    }

    let rep2 = document.getElementById("rep2").checked;
    if (rep2) {
        arr.push(document.getElementById("rep2").value);
    }

    let rep3 = document.getElementById("rep3").checked;
    if (rep3) {
        arr.push(document.getElementById("rep3").value);
    }
    arr.forEach(function(i) {
        i = parseFloat(i);
        console.log(i);
        if (i < 5 && i > 0) {
            total *= i;
        }
        else{
            total+=i;
        }
    });
    alert(total);
}