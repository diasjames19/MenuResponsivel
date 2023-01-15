function clickMenu(){
    let op = document.getElementById('opcao')
   if(op.style.display == 'block'){
       op.style.display = 'none'
   } else{
       op.style.display = 'block'
   }
}
function telaScrenn(){
    let op = document.getElementById('opcao')
    let tela = window.outerWidth
    if(tela >= 768){
        op.style.display = 'block'
    }else{
        op.style.display = 'none'
    }
    
}