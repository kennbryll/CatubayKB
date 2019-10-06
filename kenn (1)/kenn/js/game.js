// function that check if the game.html has a user parameter
function checkUserLogin()
{
    var urlParams = new URLSearchParams(window.location.search);
    var user = urlParams.get('user');
    if (!user) {
        alert('Name parameter missing. You are required to login.');
        window.location.href = 'login.html';
    } else {
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('user-welcome').innerHTML = 'Welcome, ' + user;
    }
}

var plays = ['rock', 'paper', 'scissors'];

function play()
{
    var human = document.getElementById('selected-value').value;
    //check if user doesnt select a play on the drop down list
    if (!human) {
        alert('Please select to play.');
    } else {
        // generate ranndom from 0 to 2 based on the array plays
        var computer = Math.floor(Math.random() * 3) + 1  - 1;
        //calls out the check()
        var result = check(plays[human], plays[computer]);
        var printedResult = 'Human=' + plays[human] + ' Computer=' + plays[computer] + ' Result=' + result;
        
        //created a new <p> tag and append it on the div on the game.html for the result
        var node = document.createElement('p');
        var textNode = document.createTextNode(printedResult);
        node.appendChild(textNode);
        document.getElementById('result-body').appendChild(node);
    }
}

function check(human, computer)
{
    if (human == computer) {
        return 'Tie';
    }

    if (human == 'rock' && computer == 'scissors') {
        return 'You Win';
    }

    if (human == 'paper' && computer == 'rock') {
        return 'You Win';
    }

    if (human == 'scissors' && computer == 'paper') {
        return 'You Win';
    }

    return 'You Lose';
}