// Code your solutions in this file
function writeCards(names, event) {
  const messages = []; 

  for (let i = 0; i < names.length; i++) {

    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message); 
  }

  return messages; 
}

const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(cards);

function countDown(start) {
  while (start >= 0) {

    console.log(start);
    start--; 
  }
}

countDown(10);
