// Ingesting the input
// Need to split the string into cards
// Need to split the cards into "winners" and "numbers"
// Need to split the winners and numbers into individual values

input_string = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

cards = input_string.split("\n");

for (card = 0; card<cards.length; card++) {
    cards[card] = cards[card].slice(8).split(" | ");
    cards[card][0] = cards[card][0].split();
    cards[card][1] = cards[card][1].split();
}

// Need to check second array for matches in first array
total_score = 0;
matches = cards[0][0].filter(element => cards[0][1].includes(element) !== -1);
matches[0] = matches[0].split(" ");
if (matches[0].length == 0) {
    total_score += 0;
} else if (matches[0].length == 1) {
    total_score += 1;
} else {
    total_score += 1*(2**(matches[0].length - 2));
}


console.log(cards);
console.log(matches);
console.log(total_score);