const utilitiesmodule = module.exports={
    deepEquality: function(obj1,obj2){

        if(obj1 === undefined || obj2 === undefined){
            throw "Invalid input";
        }
        else if(typeof obj1 !== "object" || typeof obj2 !== "object"){
            throw "Invalid input";
        }
        else{
            let Obj1Props = Object.getOwnPropertyNames(obj1);
            let Obj2Props = Object.getOwnPropertyNames(obj2);

            // If number of properties is different,
            // objects are not equivalent
            if (Obj1Props.length != Obj2Props.length) {
                return false;
            }

            for (let i = 0; i < Obj1Props.length; i++) {
                let propName = Obj1Props[i];

                // If values of same property are not equal,
                // objects are not equivalent
                if (obj1[propName] !== obj2[propName]) {
                    return false;
                }
            }
            return true;
        }
    },
    uniqueElements: function(arr){
        if(typeof arr === undefined){
            throw "Invalid input";
        }
        else if(!Array.isArray(arr)){
            throw "Invalid input";
        }
        else{
            return new Set(arr).size;
        }
        
    },
    countOfEachCharacterInString: function(str){
        if(typeof str === undefined){
            throw "Invalid input";
        }
        else if(typeof str !== "string"){
            throw "Invalid input";
        }
        else{
            let object = {};
            let char, index, len, count;

            for (index = 0, len = str.length; index < len; ++index) {
                char = str.charAt(index);
                count = object[char];
                object[char] = count ? count + 1 : 1;
            }
            return object;
        }
        
    }
}