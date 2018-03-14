const textMetrics = module.exports={
    simplify: function(text){
        if(typeof text !== "string"){
            throw "Invalid Input";
        }
        else if(text === undefined){
            throw "Invalid Input";
        }
        else{
            //Convert the text to lowercase
            let lowercaseText = text.toLowerCase();

            //Remove all characters except for letters and whitespace characters
            let textString = lowercaseText.replace(/[^\w\s]/gi, '');

            textString = textString.replace(/[0-9]/g, '');
            //Convert all white space to simple spaces
            textString = textString.replace(/\s+/g, ' ');

            //Trim the whitespace off the start and end of the text
            textString = textString.trim();

            return textString;
        }
    },
    createMetrics: function(text){
        if(typeof text !== "string"){
            throw "Invalid Input";
        }
        else if(text === undefined){
            throw "Invalid Input";
        }
        else{
            //Simplified text
            let simplifiedText = textMetrics.simplify(text);
            

            //total number of letter
            let totalLetter = 0;
            for(let i =0; i< simplifiedText.length;i++){
                if(simplifiedText.charAt(i).match(/[a-z]/gi)){
                    totalLetter++;
                }
            }

            //total number of words
            simplifiedText = simplifiedText.replace(/[0-9]/gi,'');
            simplifiedText = simplifiedText.trim();                       
            let word = simplifiedText.split(" ");
            let totalWord = word.length;
            
            //total number of unique words
            let uniqueWord = [];
            for(let j =0;j<word.length;j++){
                if(!uniqueWord.includes(word[j])){
                    uniqueWord.push(word[j]);
                }
            }
            let totalUniqueWord = uniqueWord.length;

            //number of words in the text that are 6 or more letters long
            let longest = 0;
            for(let k=0;k<word.length;k++){
                if(word[k].length >= 6){
                    longest++;
                }
            }
            let numOfLetters = word.map(function (num){
                return num.length;
            });

            //the average number of letters in a word in the text
            let sum = 0;
            for(let j=0 ; j< numOfLetters.length; j++){
                sum = sum + numOfLetters[j];
            }
            let avgWordLength = sum / numOfLetters.length;

            //a dictionary of each word and how many times each word occurs in the text
            let occurance = {};
            for(let i = 0 ; i < uniqueWord.length ; i++){
                let wcount =0;
                for(let j = 0; j<word.length ; j++){
                    if(uniqueWord[i]==word[j]){
                        wcount++;
                    }
                }
                occurance[uniqueWord[i]] = wcount;
            }
            let result = {
                totalLetters : totalLetter,
                totalWords : totalWord,
                uniqueWords : totalUniqueWord,
                longWords : longest,
                averageWordLength : avgWordLength,
                wordOccurrences : occurance
            };
            return result;
        }
    }
}