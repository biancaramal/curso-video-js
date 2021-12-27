function verificar(){
    //Pegando os valores dos inputs
    var anonasc = document.getElementById('ano')
    var fem = document.getElementById('fem')
    var masc = document.getElementById('masc')

    //Configurando a data para ter o ano atual
    var anoatual= new Date().getFullYear() //pega os 4 dígitos do ano
    
    //Guardando em variável pra exibição
    var res = document.getElementById('res')
    
    //Calculando a idade da pessoa
    var idade = anoatual - Number(anonasc.value)
    //Sexo
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    
    //Criando um elemento dinâmico pro HTML
    var img = document.createElement('img')
    //img.setAttribute('id', 'foto')


    if( anonasc.value.length == 0 || anonasc > anoatual ){
        alert('Verifique os dados e tente novamente!')
    }else{
        
        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-m.png')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-m.png')
            }

        }else if (sexo[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'crianca-f.png')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}
