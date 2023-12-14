
class Mega{
    maxNumbers = 6;
    newPickedNumber;
    ticket = [];
    drawingNumbers = [];
    name = "Mega";
    matchingNumbers = {1:0,2:0,3:0,4:0,5:0,6:0,}

    getRandomInt = function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    hasOneNumberMatching = function(arrNumbers, number){
        return arrNumbers.includes(number);
    }

    howManyMatchingNumbers = function(){
        for(let i=0;i<this.ticket.length;i++){
            var countMatchingNumbers = 0;
            for(let j=0;j<this.ticket[i].length;j++){
                if(this.hasOneNumberMatching(this.drawingNumbers,this.ticket[i][j]) ){
                    countMatchingNumbers++;
                }
            }
            if(countMatchingNumbers > 0) this.matchingNumbers[countMatchingNumbers] += 1;
        }
    }

    pickedNumberAlreadyExist = function(new_arr){
        for(let i=0;i<this.ticket.length;i++){
            let countMatchingNumbers = 0;
            for(let j=0;j<this.ticket[i].length;j++){
                if(this.hasOneNumberMatching(new_arr,this.ticket[i][j]) ){
                    countMatchingNumbers++;
                }
            }
            if(countMatchingNumbers == 6) return true;
        }
        return false;
    }

    addNumber = function(newSetNumbers){
        if(!this.pickedNumberAlreadyExist(newSetNumbers)){
            this.ticket.push(newSetNumbers);
        }else{
            console.log("Invalid numbers. Game already exist!");
        }
    }

    printTicket = function(){
        console.log("Ticket: ",this.ticket);
        console.table(this.ticket);
    }

}


var objRandomTicket = new Mega();
for(let i=0;i<10;i++){
    var newNumbers = [];
    for(let j=0;j<6;j++){
        newNumbers.push(objRandomTicket.getRandomInt(1,61));
    }
    objRandomTicket.addNumber(newNumbers);
}

var drawingNumbers = [];
for(let j=0;j<6;j++){
    drawingNumbers.push(objRandomTicket.getRandomInt(1,61));
}
objRandomTicket.drawingNumbers = drawingNumbers;
objRandomTicket.howManyMatchingNumbers();
objRandomTicket.printTicket();
console.log("Drawing Numbers: ", objRandomTicket.drawingNumbers);
console.log("Matching Numbers: ", objRandomTicket.matchingNumbers);

console.log("");
