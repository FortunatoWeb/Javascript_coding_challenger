let cpf = '038.841.865-66';
let regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/g;
let regexchange = /\./g;
let textChanged = cpf.replace(regexchange, ',');
console.log(regex.test(cpf),textChanged);