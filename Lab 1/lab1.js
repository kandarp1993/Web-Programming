const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let squareSums = 0;
    for(let i=0; i<arr.length;i++){
        let squared = arr[i] * arr[i];
        squareSums = squareSums + squared;
    }
    return squareSums;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(num < 1){
        return 0;
    }
    else if(num ==1){
        return 1;
    }
    else{
        return questionTwo(num-1) + questionTwo(num -2);
    }
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    const vowel  = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i< text.length;i++){
        if(vowel.indexOf(text[i]) != -1){
            count++;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(num == 0){
        return 1; 
    }
    else if(num < 0){
        return 'NaN';
    }
    else{
        return (num * questionFour(num - 1));
    }
}

module.exports = {
    firstName: "Kandarp", 
    lastName: "Desai", 
    studentId: "10419687",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};