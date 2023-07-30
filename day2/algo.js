const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split("\n");
    return lines.map(String);
}

const file_path = 'input.txt';
const data = read_file(file_path);


function CalculateSubmarinePosition() {
    let horizontalPosition = 0;
    let depthPosition = 0;
    let newData = [];
    data.forEach(element => {
        newData.push(element.split(" "));
    })
    for (i=0; i<newData.length; i++) {
        if (newData[i][0] === "forward") {
            horizontalPosition += parseInt(newData[i][1]);
        } else if (newData[i][0] === "down") {
            depthPosition += parseInt(newData[i][1]);
        } else if (newData[i][0] === "up") {
            depthPosition -= parseInt(newData[i][1]);
        }
    }
    return horizontalPosition * depthPosition;
}

function CalculateSubmarinePositionUpdated() {
    let horizontalPosition = 0;
    let depthPosition = 0;
    let aim = 0;
    let newData = [];
    data.forEach(element => {
        newData.push(element.split(" "));
    })
    for (i=0; i<newData.length; i++) {
        if (newData[i][0] === "forward") {
            horizontalPosition += parseInt(newData[i][1]);
            depthPosition += parseInt(newData[i][1]) * aim;
        } else if (newData[i][0] === "down") {
            aim += parseInt(newData[i][1]);
        } else if (newData[i][0] === "up") {
            aim -= parseInt(newData[i][1]);
        }
    }
    return horizontalPosition * depthPosition;
    }

  



console.log(CalculateSubmarinePosition());
console.log(CalculateSubmarinePositionUpdated());
