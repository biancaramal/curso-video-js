function contar(){
    var txtinc = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtcont = document.getElementById('passo')

    var inicio = Number(txtinc.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtcont.value)
    
    var res = document.getElementById('res')


    if(txtinc.value.length == 0 || txtfim.value.length == 0 || txtcont.value.length == 0){
        alert('Por favor, verifique os dados e tente novamente!')
    }else{
        if(txtinc.value.length > 0 && txtfim.value.length > 0 && txtcont.value.length > 0){
            //verificação
            res.innerHTML = 'Contando: <br />'
            res.innerHTML += String.fromCodePoint(0x1F3F3)
            for(var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c}`
                res.innerHTML += String.fromCodePoint(0x1F449)
            }
            res.innerHTML += String.fromCodePoint(0x1F3C1)
        }
    }//fim primeiro if de validação cx vazia
} //fim da função