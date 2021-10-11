let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let thisDay = new Date().getDay();

for (let i = 0; i < week.length; i++) {
    let html = week[i];
    if (i === 6 && thisDay - 1 < 0) html = html.italics();
    else if (i === (thisDay - 1)) html = html.italics(); 
    else if (i >= 5) html = html.bold(); 

    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
}





























