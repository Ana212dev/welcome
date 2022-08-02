// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors(){
    let random =  Math.random() //between 0 and 1
    if( random < .33 ) {
        return 'rock'
    }else if (random < .66) {
        return 'paper'
    }else{
        return 'scissors'
    }

}
