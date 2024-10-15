let valores = [8, 1, 7, 8 , 4, 9]

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}

valores.sort() //coloca os valores em ordem crescente
for (let pos in valores){
    console.log(`Dessa maneira não muda, veja só como fica a posição ${pos} tem o valor ${valores[pos]} `)
}
