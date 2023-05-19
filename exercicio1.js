const comparar2numero = (n1 ,n2) => {
    if(n1 < n2){
        console.log(`O numero ${n1} é menor que ${n2}`);
    }else if(n1 === n2){
        console.log(`o numero ${n1} é igual ${n2}`)
    }else{
        console.log(`o numero ${n1} é maior ${n2}`)
    }
}
comparar2numero(20,40)
comparar2numero(20,'20')
comparar2numero(20,3)