let initialInput = 1;
document.getElementById("input").value = initialInput;

function addition () {
    let mainValue = Number(document.getElementById('main').innerText);
    let inputValue = Number(document.getElementById("input").value);
    let plusValue = mainValue + inputValue;
    document.getElementById('main').innerText = plusValue;
    if (plusValue < 0) {
        document.getElementById('main').style.color = "red";
        return plusValue;
    } else if (plusValue < 0) {
        document.getElementById('main').style.color = "black";
        return plusValue;
    }
};

function subtraction () {
    let mainValue = Number(document.getElementById('main').innerText);
    let inputValue = Number(document.getElementById("input").value);
    let minusValue = mainValue - inputValue;
    document.getElementById('main').innerText = minusValue;
    if (minusValue < 0) {
        document.getElementById('main').style.color = "red";
        return minusValue;
    } else if (minusValue > 0) {
        document.getElementById('main').style.color = "black";
        return minusValue;
    }
};