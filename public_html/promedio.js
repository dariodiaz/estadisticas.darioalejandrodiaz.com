function calcAverage(list) {
    let sum = 0;
    for (let i=0; i<list.length; i++) {
        sum += list[i];
    }

    const average = sum / list.length;
    return average;
}
