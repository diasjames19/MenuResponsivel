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


    /*
    320px — 480px: dispositivos móveis
    481px — 768px: iPads, tablets
    769px — 1024px: telas pequenas, laptops
    1025px — 1200px: desktops, telas grandes
    1201px e acima —  telas muito grandes, TVs */
   
    if(tela <=768){
        let msg = "Dispositivos Móveise";
        document.getElementById("titulo").innerHTML = msg;
    }if(tela >481 && tela <= 768 ){
        let msg = "Ipads & Tablets";
        document.getElementById("titulo").innerHTML = msg;
    }if(tela >769 && tela <= 1024){
        let msg = "Laptops";
        document.getElementById("titulo").innerHTML = msg;
    }if(tela >1024 && tela <=1366){
        let msg = "Desktops";
        document.getElementById("titulo").innerHTML = msg;
    }if(tela >1366){
        let msg = "TVs";
        document.getElementById("titulo").innerHTML = msg;
    }
    
    
}
