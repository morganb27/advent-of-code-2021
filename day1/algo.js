const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split("\n");
    return lines.map(Number);
}

const file_path = 'input.txt';
const data = read_file(file_path);


function NumberOfTimesADepthMeasurementIncreases() {
    let count = 0;
    for (i=0; i<data.length - 1; i++) {
        if (data[i]<data[i+1]) {
            count++;
        }
    }
    return count;
}

console.log(NumberOfTimesADepthMeasurementIncreases());

function NumberOfTimesAThreeMeasurementSlidingWindowIncreases() {
    let count = 0;
    for (i=0; i<data.length;i++) {
        let firstThreeMeasurementWindow = data[i] + data[i+1] + data[i+2];
        let secondThreeMeasurementWindow = data[i+1] + data[i+2] + data[i+3];
        if (firstThreeMeasurementWindow <secondThreeMeasurementWindow) {
            count++;
        }
    }
    
    return count
}

console.log(NumberOfTimesAThreeMeasurementSlidingWindowIncreases());