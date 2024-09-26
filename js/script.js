console.log('hello world');

//computers choice

const getComputerChoice = () => {
    const choice = Math.round(Math.random() * 100)
    if(choice <= 33){
        console.log(`Computer selects: rock`);
        return 'rock'
    }
    else if(choice > 33 && choice <= 66){
        console.log(`Computer selects: paper`);
        return 'paper'
    }
    else if(choice > 66 && choice <= 100){
        console.log(`Computer selects: sissors`);
        return 'scissors'
    }
}


const getHumanChoice = () => {
    const choice = prompt('Select between Rock - Paper - Scissors');
    if(choice.toLowerCase() === 'rock'){
        console.log(`Your choice: ${choice}`);
        return choice
    }
    else if(choice.toLowerCase() === 'paper'){
        console.log(`Your choice: ${choice}`);
        return choice
    }
    else if(choice.toLowerCase() === 'scissors'){
        console.log(`Your choice: ${choice}`);
        return choice
    }
    else{
        console.log(`${choice} that choice do not exist, repeat`);
        return getHumanChoice()
    }
}

const playground = (humanChoice, CpuChoice) => {
    if (humanChoice === 'scissors' && CpuChoice === 'rock'){
        console.log('Computer Win');
    }
    else if (CpuChoice === 'scissors' && humanChoice === 'rock'){
        console.log('Human Wins');
    }
    else if (humanChoice === 'paper' && CpuChoice === 'scissors'){
        console.log('Computer Win');
    }
    else if (CpuChoice === 'paper' && humanChoice === 'scissors'){
        console.log('Human Wins');
    }
    else if (humanChoice === 'paper' && CpuChoice === 'rock'){
        console.log('Human Win');
    }
    else if (CpuChoice === 'paper' && humanChoice === 'rock'){
        console.log('Computer Wins');
    }
    else{
        console.log('Its a tie');
    }
}


const human = getHumanChoice();
const cpu = getComputerChoice();

playground(human, cpu)