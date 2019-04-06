/**
 * rectangle object
 * @property: width - a number
 * @property: length - a number
 * @method: getPerimeter - returns a number
 * @method: getArea - returns a number
 */

 var rectangle = new Object();
 rectangle.width = 4;
rectangle.length = 6;
rectangle.getPepmrimeter = function(){
    return this.width*2 + this.length*2;
}
rectangle.getArea = function(){
    return this.width*this.length;
}

/**
 * 
 * @param {*} width 
 * @param {*} length 
 * @method getPerimeter
 * @method getArea
 */
function Rectangle(width, length){
    this.width = width;
    this.length = length;
    this.getPerimeter = function(){
        return this.width*2 + this.length*2;
    }
    this.getArea = function(){
        return this.width*this.length;
    }
}