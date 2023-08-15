const fs = require('fs');

function read_file(file_path) {
    const content = fs.readFileSync(file_path, 'utf-8');
    const sections = content.split("\n\n");

    const numbers = sections[0].split(",").map(Number);

    const cards = sections.slice(1).map(cardText => 
        cardText.split("\n").map(line => 
            line.split(/\s+/).map(Number)
        )
    );
    return {numbers, cards};
}

const data = read_file("input.txt");

function processBingoGameNumbers() {
    for(number of data.numbers) {
        for(let i =0; i<data.cards.length; i++) {
            for(let j =0; j<data.cards[i].length; j++) {
                for (let k =0; k<data.cards[i][j].length;k++) {
                    if(number === data.cards[i][j][k]) {
                        data.cards[i][j][k] = "*";
                        if (checkIfCardWins(data.cards[i])) {
                            let winningCard = data.cards[i];
                            return calculateFinalScore(winningCard, number);
                        }
                    }
                }
            }
        }
    }
}

function checkIfCardWins(card) {
    for (let row of card) {
        if (row.every( cell => cell === "*")) {
            return true
        }
    }

    for (let col=0; col < card[0].length; col++) {
        if (card.every(row => row[col] === "*")) {
            return true
        }
    }
    
}

function calculateFinalScore(card, num) {
    let sum =0;
    for (let i = 0; i<card.length;i++) {
        for (let j =0; j<card[0].length;j++) {
            if (typeof card[i][j] === "number") {
                sum+= card[i][j];
            }
        }
    }
    return sum * num

}

console.log(processBingoGameNumbers());