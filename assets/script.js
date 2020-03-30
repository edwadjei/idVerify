let idType = document.querySelector('.idType'),
    input = document.querySelector('#result'),
    btn = document.querySelector('#generate'),
    lDisp = document.querySelector('.result__info right'),
    x = ['Voters', 'NHIS', 'Passport', 'NIA', 'DVLA', 'SSNIT']


input.addEventListener('input', ()=> {
    idType.textContent = ``;
    lDisp.textContent = ``;

});
btn.addEventListener('click', ()=>{
    let id = input.value.trim().toUpperCase(), type
         l = id.length,  
         n = id.replace(/[^0-9]/g,"").length,
         s = id.replace(/[^a-z]/g,"").length + id.replace(/[^A-Z]/g,"").length

    if(l == 10 && s === 2 && 
        isNaN(+id.charAt(id.length-1))&&isNaN(+id.charAt(id.length-2))||l==10 &&n==10){
        type = x[0];
    }else if (l == 8 && n == 8){
        type = x[1]
    }
    else if (l==8 && isNaN(+id.charAt(0)) && n==7 && (id.charAt(0)=='G'||id.charAt(0)=='H')){
        type = x[2]
    }else if (l==8 && n==6 && isNaN(+id.charAt(0)) && isNaN(+id.charAt(2)) ||
              l==8 && n==6 && isNaN(+id.charAt(0)) && isNaN(+id.charAt(1)) ||
              (l==8 && isNaN(+id.charAt(0)) && n==7 && id.charAt(0)) ||
              l==10 && s==1 && isNaN(+id.charAt(8)) || 
              l==5 && n==5 || l==6 && n==6 || l==7 && n==6 && isNaN(+id.charAt(0))
             ){ 
        type = x[4]  
    }else if (l==13 && n==10 && (id.includes('GHA') || id.includes('AAA'))){
        type = x[3] 
    }else if (l==13 && n==12 && isNaN(+id.charAt(0))){
        type = `${x[5]} or ${x[3]}`
    }else{
        type = 'Invalid ' + l
    }
        idType.textContent = `ID type is ${type}`;

});
