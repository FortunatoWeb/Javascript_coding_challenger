function dateTimeNow(){
    //console.log('teste_datatime');
    return new Date();
}

const showDataTimeNow = dateTimeNow().toLocaleDateString('pt-BR', { dateStyle: "short"});
let tagDateTime = document.getElementById('datetime');
tagDateTime.innerHTML = showDataTimeNow;

export { dateTimeNow };