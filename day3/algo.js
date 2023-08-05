const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    const lines = content.split("\n");
    return lines.map(String);
}

const file_path = 'input.txt';
const data = read_file(file_path);
let oxygenGeneratorData = data;
let co2ScrubberData = data;




function CalculateEplonAndGammaRates() {
    let gammaRate = "";
    let epsilonRate = "";
    for (j=0; j<data[0].length; j++) {
        let onesCount = 0;
        let zerosCount = 0;
        for (i=0; i<data.length;i++) {
            if (data[i][j] === "1") {
                onesCount++
            } else if (data[i][j] === "0") {
                zerosCount++
            }         
        }
        if (onesCount > zerosCount) {
            gammaRate += "1"
            epsilonRate += "0"
        } else if (zerosCount > onesCount) {
            gammaRate += "0"
            epsilonRate += "1"
        }
    }
    
    return parseInt(epsilonRate, 2) * parseInt(gammaRate, 2)
}

    function CalculateOxygenGeneratorRating(n=0) {
        if(n >= oxygenGeneratorData[0].length || co2ScrubberData.length === 1) return parseInt(oxygenGeneratorData.join(""), 2);
            let onesCount = 0;
            let zerosCount = 0;
            for(i=0; i<oxygenGeneratorData.length;i++) {
                if (oxygenGeneratorData[i][n] === "1") {
                    onesCount++
                } else if (oxygenGeneratorData[i][n] === "0") {
                    zerosCount++
                }
            }
            if (onesCount>=zerosCount) {
                 oxygenGeneratorData = oxygenGeneratorData.filter(item => item.charAt(n) != "0")     
            } else {
                 oxygenGeneratorData = oxygenGeneratorData.filter(item => item.charAt(n) != "1" )
            }
            
            return CalculateOxygenGeneratorRating(n+1);       
        }
        
    

    function CalculateCO2ScrubberRating(n=0) {
        if(n >= co2ScrubberData[0].length || co2ScrubberData.length === 1) return parseInt(co2ScrubberData, 2);
            let onesCount = 0;
            let zerosCount = 0;
            for(i=0; i<co2ScrubberData.length;i++) {
                if (co2ScrubberData[i][n] === "1") {
                    onesCount++
                } else if (co2ScrubberData[i][n] === "0") {
                    zerosCount++
                }
            }
            if (zerosCount<=onesCount) {
                 co2ScrubberData = co2ScrubberData.filter(item => item.charAt(n) != "1")     
            } else {
                 co2ScrubberData = co2ScrubberData.filter(item => item.charAt(n) != "0" )
            }

            return CalculateCO2ScrubberRating(n+1);       
        }
        
    
    function CalculateLifeSupportRating() {
        return CalculateOxygenGeneratorRating() * CalculateCO2ScrubberRating();
    }

console.log(CalculateOxygenGeneratorRating());
console.log(CalculateCO2ScrubberRating());
console.log(CalculateLifeSupportRating())
