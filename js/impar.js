function impar(){
    let n1 = document.getElementById('numeroD')
    let res = document.getElementById('res')
    let maq = document.getElementById('res2')
    let temp = Math.round(Math.random() * (10*5) + 5)

    if(n1.value.length == 0){
        window.alert('Os dados estão faltando')
    }else{
        res2.innerHTML = 'Contando'
        let n2 = Number(n1.value)
        res.innerHTML = `Máquina: ${temp}`
        let soma = n2 + temp
        if(soma % 2 == 0){
            res2.innerHTML = `A soma de ${n2} + ${temp} é par!<br/> Você Perdeu!`
        }else{
            res2.innerHTML = `A soma de ${n2} + ${temp} é ímpar!<br/> Você Ganhou`
        }
    }
}
