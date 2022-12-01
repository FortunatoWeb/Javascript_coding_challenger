class Solution{
    ops;
    arrayScore = [];
    score = 0;
    constructor(ops){
        this.ops = ops;
    }

    toNumber = function(n) {
        return Number(n) ? parseInt(n) : n;
    }

    sumScore = function() {
        return this.arrayScore.reduce((a,b) => a+b);
    }

    calPoints = function () {
        this.ops.forEach(element => {
            if(Number(element)){
                this.arrayScore.push(parseInt(element));
            }
            switch (element) {
                case "C":
                    this.arrayScore.pop();
                    break;
                case "D":
                    this.arrayScore.push(this.arrayScore[this.arrayScore.length-1]*2);
                    break;
                case "+":
                    this.arrayScore.push(this.toNumber(this.arrayScore[this.arrayScore.length-1])+this.toNumber(this.arrayScore[this.arrayScore.length-2]));
                    break;
            
                default:
                    break;
            }
        });
        return this.sumScore();
    }
}

/**
 * @C: remove o último elemento da lista
 * @D: multiplica por 2
 * @+: soma os dois últimos elementos
 */

//const solution = new Solution();
//solution.ops = ["5", "2", "C", "D", "+"]; // [5, 10, 15]
//solution.ops = [];
//let output = solution.calPoints();
//console.log(output);