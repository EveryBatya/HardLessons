// 1)
let lang = prompt("ru or en?", "ru");
let weekEng = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekRus = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// a)
if (lang == 'ru') {
    for (let i = 0; i < weekRus.length; i++) console.log(weekRus[i]);
} 
else {
    for (let i = 0; i < weekEng.length; i++) console.log(weekEng[i]);
}

// b)
switch (true) {
    case lang == 'ru':
        console.log(weekRus);
        break;
    case lang == 'en':
        console.log(weekEng);
        break;
}

// c)
let weeks = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], 
            ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']];

console.log(lang == 'en' ? weeks[0] : weeks[1]);


// 2)
let namePerson = prompt('Как твое имя?');
console.log(namePerson == 'Артем' ? 'Директор' : namePerson == 'Александр' ? 'Преподаватель' : 'Студент');








