// Code your solutions in this file
/*
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me.`);
    debugger;
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wraped ${gifts[i]} and added a bow!`);
        debugger;
    }
    
    return gifts;
}

wrapGifts(gifts);

*/



function writeCards(names, eventName) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}

function countDown(count){

    while(count >= 0){
        console.log(count);
        count--;
    }
}