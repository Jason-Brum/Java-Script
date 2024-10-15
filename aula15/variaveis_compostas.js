let num = [5, 8 , 2, 9, 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`A primeira posição do vetor tem valor de  ${num[0]}`)

let pos = num.indexOf(6)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}
    else{
        console.log(`O valor está na posição ${pos}`)
    }