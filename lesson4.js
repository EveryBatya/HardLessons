function someFunc(str) {
    if (typeof str != 'string') return "Мне надо строку, дурачок.";
    let arr = str.split(' ');
    str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    if (str.length > 30) return str.slice(0, 31) + '...';
    return str;
}













