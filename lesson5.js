let arr = [832342, 234222, 763403, 2363, 4154246, 95470, 47674555];

for (let i = 0; i < arr.length; i++) {
    if (String(arr[i])[0] == 2 || String(arr[i])[0] == 4) console.log(arr[i]);
}

for (let i = 1; i < 100; i++) {
    if (i == 2 || i == 3 || i == 5 || i == 7) console.log(i, 'Делители этого числа - 1 и ' + i);
    else if ((i != 1) && (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0)) {
         console.log(i, 'Делители этого числа - 1 и ' + i);
     }
     
}