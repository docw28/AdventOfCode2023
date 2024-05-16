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

pile = input_string.split("\n");

for (card = 0; card<pile.length; card++) {
    pile[card] = pile[card].slice(8).split(" | ");
    pile[card][0] = pile[card][0].split();
    pile[card][1] = pile[card][1].split();
}
console.log(pile);

// Need to check second array for matches in first array
total_score = 0;
matches = [];
num = 0, win = 1; // First and second elements in a card

// Splitting numbers and wins into individual values
// Removing blank entries left by double spaces
for (card = 0; card<pile.length; card++) {
    
    pile[card][num] = String(pile[card][num]).split(" "); // Split and clean nums
    for (i = 0; i<pile[card][num].length; i++) {
        if (pile[card][num][i] == "") {
            pile[card][num].splice(i, 1);
        }
    }
    
    pile[card][win] = String(pile[card][win]).split(" "); // Split and clean wins
    for (i = 0; i<pile[card][win].length; i++) {
        if (pile[card][win][i] == "") {
            pile[card][win].splice(i, 1);
        }
    }
    
    matches = pile[card][num].filter(element => pile[card][win].includes(element));
    console.log(matches);
    
    if (matches.length == 0) {
        total_score += 0;
    } else if (matches.length == 1) {
        total_score += 1;
    } else {}
}
