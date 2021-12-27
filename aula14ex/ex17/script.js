function tabuada(){
    var select = document.getElementById('select')
    var txtnum = document.getElementById('num')
    var num = Number(txtnum.value)

    if(txtnum.value.length == 0){
        alert('Por favor, verifique os dados e tente novamente!')
    }else{
        for(var c = 0; c <= 10; c++){
            res = c * num
            select.innerHTML += `<option value="n${c}">${num} x ${c} = ${res}</option> `
        }
    }
}