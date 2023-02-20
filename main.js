function playgame(){
    let ans = prompt('Welcome to the game. Please select number between 1 to 6 and I will roll a dice for you.');
let ansnum = parseInt(ans);
if(ansnum>= 1 && ansnum<= 6){
    let output = Math.floor(Math.random()*(6));
    document.getElementById('user').innerHTML = 'User: ' + ansnum;
    document.getElementById('dice').innerHTML = 'Dice: '+ output;
    if (ansnum === output){
        alert('You won the game!!!');
    }
    else{
        alert('You loose the game');
    }
}
else{
    alert('Enter number only between 1 and 6.');
}

}

