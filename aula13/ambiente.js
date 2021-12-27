// var c = 1

// while(c < 6){
//     console.log(`Passo ${c}`)
//     c++
// }

// do{
//     console.log(`Passo ${c}`)
//     c++
// }while(c < 6)
// console.log('Vai Começar..')
// for(var c = 1; c <= 10; c++){
//     console.log(`Passo ${c}`)
// }
// console.log('Fim.')

var paginas = ['home', 'about', 'resume', 'portfolio', 'contact']
var atual
var pre
var pos
flength = paginas.length
paginaatual = 0

console.log(paginas.indexOf(paginaatual))

for(i = 0; i < flength; i++){
    atual = paginas[i]
    pre = paginas[i - 1]
    pos = paginas[i + 1]

    if(pre === undefined){
        pre = paginas[4]
        console.log(`Atual: ${atual} Anterior: ${pre} Próximo: ${pos}`)
    }else if(pos === undefined){
        pos = paginas[0]
        console.log(`Atual: ${atual} Anterior: ${pre} Próximo: ${pos}`)
    }
    else{
        console.log(`Atual: ${atual} Anterior: ${pre} Próximo: ${pos}`)
    }

}