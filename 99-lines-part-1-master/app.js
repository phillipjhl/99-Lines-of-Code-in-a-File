let friends = ['Katrina', 'Norah', 'Walt', 'Hank', 'Denis'];

console.log('begin outer loop');
for (i = 0; i < friends.length; i++) {
    let name = friends[i];
    console.log('' + name + ':')
    console.log('start inner loop');
    for (j = 99; j > 0; j--){
        if (j > 1) {
        console.log(j + ' lines of code in the file, ' + j + 'lines of code; ' + name + 'strikes one out, clears it all out, ' + (j-1) + 'lines of code in the file');
        }
            else {
                console.log(j + ' line of code in the file, ' + j + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file');
            }
    }
}