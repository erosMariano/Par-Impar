/*var escolha  = window.prompt('Par ou Impar: ')
var num = window.prompt('Digite um número: ')
num = Number(num)
console.log(num)
let divi = document.getElementById("texto")
let maquina = Math.round(Math.random() * (10*5) + 5)
const soma = num + maquina

divi.innerHTML = `<p> O número digitado foi ${num}</p>`;
divi.innerHTML += `<p>O número que a máquina escolheu foi ${maquina} resultando em: ${soma}</p>`
divi.innetHTML += `<p>A soma dos números foi: ${soma}</p>`
if(escolha == 'Par'){
    if(soma % 2 == 0){
        divi.innerHTML += `<p>Você ganhou!</p>`
    }else{
        divi.innerHTML += `<p>Você perdeu!</p>`
    }
}
if(escolha == "Impar"){
    if(soma % 2 != 0){
        divi.innerHTML += `<p>Você ganhou!</p>`
    }else{
        divi.innerHTML += `<p>Você perdeu!</p>`
    }
}
*/
function par(){
    let n1 = document.getElementById('numeroD')
    let res = document.getElementById('res')
    let maq = document.getElementById('maquina2')
    let temp = Math.round(Math.random() * (10*5) + 5)

    if(n1.value.length == 0){
        window.alert('Os dados estão faltando')
    }else{
        res.innerHTML = 'Contando'
        let n2 = Number(n1.value)
        res.innerHTML = `Máquina: ${temp}`
        let soma = n2 + temp
        if(soma % 2 == 0){
            res2.innerHTML = `A soma de ${n2} + ${temp} é par!<br/> Você Ganhou!`
        }else{
            res2.innerHTML = `A soma de ${n2} + ${temp} é ímpar!<br/> Você Perdeu`
        }
    }
}