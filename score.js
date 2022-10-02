const p1 = {
    score: 0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#display1')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2'),
    display: document.querySelector('#display2')
}


const reset = document.querySelector('#reset');
const select = document.querySelector('#select');


let winScore = 3;
let isGameOver = false;





p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
})


function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');

            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);
});

reset.addEventListener('click', resetFunc);

select.addEventListener('change', function () {
    winScore = parseInt(this.value);
    resetFunc();
})

function resetFunc() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}