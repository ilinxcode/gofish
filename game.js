//
// { 
//    type: (sector)
//    metric: (such as eps)
//    name: (ie, Microsoft)
//    ticker: (ie, MSFT)
//  }
//
var player_count = 4,
    types = 8,
    cards_per_type = 3,
    deck = [],
    hands = [],
    names = ['alice','bob','carol','dave','edith','frank'],
    stacks = [],
    turn = 0;

function render() {
  hands.forEach((row, player) => 
}

function nextTurn() {
  turn = (turn + 1) % player_count;
}

function gofish() {
  console.log("Go fish!");
  nextTurn();
}

function ask(who, what) {
  let amount = hands[who].filter(row => row.type == what);
  if(amount === 0) {
    gofish();
  } else {
    console.log(`${names[turn]} has ${amount} of ${what}.`)
    let transfer = hands[who].filter(row => row.type == what);
    hands[who] = hands[who].filter(row => row.type != what);
    hands[turn] = hands[turn].concat(transfer);
  }
}
