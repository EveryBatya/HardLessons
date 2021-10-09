let quest;
let numOfAttempts = 10;

function one(num) {
    num = Math.floor(Math.random() * 100);
    console.log(num);
    function two() {
        quest = prompt('Угадай число от 1 до 100!');

        if (!isNumber(quest)) {
            quest = confirm('Введи число!');
            if (quest === false) return alert('Игра окончена!');
            two();
        } 

        else if (+quest < num) {
            numOfAttempts--;
            quest = confirm('Загаданное число больше! Осталось попыток - ' + numOfAttempts);
            if (quest === false) return alert('Игра окончена!');
            two();
        } 

        else if (+quest > num) {
            numOfAttempts--;
            quest = confirm('Загаданное число меньше! Осталось попыток - ' + numOfAttempts);
            if (quest === false) return alert('Игра окончено!');
            two();
        }

        else if (numOfAttempts === 0) {
            quest = confirm('Попытки закончились, хотите сыграть еще?');
            if (quest === false) return alert('Игра окончена!')
            else one();
            two();
        }

        else {
            quest = confirm('Вы угадали!!! Хотите сыграть еще?');
            if (quest === false) return ('Победителей не судят');
            else one();
        }
    }
    two();
}

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

one();



