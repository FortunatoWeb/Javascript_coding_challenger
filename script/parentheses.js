/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let wrong = /(\(\})|(\(\])|(\{\))|(\{\])|(\[\))|(\[\})/g.test(s);
    let paOpen = /\(/g;
    let chOpen = /\{/g;
    let coOpen = /\[/g;
    let paClose = /\)/g;
    let chClose = /\}/g;
    let coClose = /\]/g;
    
    if(s.match(paOpen).length != s.match(paClose).length || s.match(chOpen).length != s.match(chClose).length || s.match(coOpen).length != s.match(coClose).length || wrong ){
      return 'invalid'; 
     }
    return 'valid';
};

//console.log(isValid('{([])}}'));