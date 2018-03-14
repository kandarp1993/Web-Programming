const bluebird = require("bluebird");
const textmetrics = require("./textMetrics");
const filedata = require("./fileData");
const fs = bluebird.promisifyAll(require("fs"));

async function main(fileName) {
    try{
        let filePath = fileName.split();
        let jsonFile = fs.existsSync(filePath[0]+".result.json");
        let jsonFileName = filePath[0]+".result.json";
        if(jsonFile){
            let data = await filedata.getFileAsJSON(jsonFileName);
            if(data){
                console.log(data);
            }
        }
        else{
            let fileAsString = await filedata.getFileAsString(fileName);
            let simplyfied = textmetrics.simplify(fileAsString);
            let checkFilePath = fileName.split(".");
            let path = checkFilePath[0] + ".debug.txt";
            filedata.saveStringToFile(path, simplyfied);
            let metrics = textmetrics.createMetrics(simplyfied);
            await filedata.saveJSONToFile(jsonFileName,metrics);
            if(fs.existsSync(jsonFileName)){
                let jsonData = await filedata.getFileAsJSON(jsonFileName);
                if(jsonData){
                    console.log(jsonData);
                }
            }
        }
    }
    catch(error){
        console.log(error);
    }
}
main('chapter1.txt');
main('chapter2.txt');
main('chapter3.txt');