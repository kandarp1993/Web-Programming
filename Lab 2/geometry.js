const geometrymodule = module.exports={
    volumeOfRectangularPrism: function(length, width, height){
        let volume = "";
        if((length === undefined || isNaN(length)) && (width === undefined || isNaN(width)) && (height === undefined || isNaN(height))){
            throw "Input is not a number";
        }
        else if(length <= 0 || width <= 0 || height <= 0){
            throw "Input must be non-zero positive number"
        }
        else{
             volume = length * width * height;
             return volume;
        }
    },
    surfaceAreaOfRectangularPrism: function(length, width, height){
        let area = "";
        if((length === undefined || isNaN(length)) && (width === undefined || isNaN(width)) && (height === undefined || isNaN(height))){
            throw "input is not a number";
        }
        else if(length <= 0 || width <= 0 || height <= 0){
            throw "input must be non-zero positive number"
        }
        else{
             area = 2 * (width * length + height * length + height * width);
             return area;
        }
    },
    volumeOfSphere: function(radius){
        let volume= "";
        if(radius === undefined || isNaN(radius)){
            throw "input is not a number";
        }
        else if(radius <= 0){
            throw "input must be non-zero positive number"
        }
        else{
            volume = (4/3) * (Math.PI) * (radius * radius * radius);
            return volume;
        }
    },
    surfaceAreaOfSphere: function(radius){
        let area= "";
        if(radius === undefined || isNaN(radius)){
            throw "input is not a number";
        }
        else if(radius <= 0){
            throw "input must be non-zero positive number"
        }
        else{
            area = 4 * (Math.PI) * (radius * radius);
            return area;
        }
    }
};