function contagem(){
let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 | passo.value.length == 0){
        alert('[Erro!] Preencha os dados')
        res.innerHTML = 'Impossivel contar' 
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let c;

        if(p == 0){
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }
    
        if(i < f){
            //Contagem progressiva
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }else{
            //Contagem regressiva
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}


 
