// 1
let add = (a,b) => {
    return `l'addidtion de ${a} + ${b} = ${a + b}`
}

let ex1 = add(4,5);
console.log(ex1);
// 2

let sous = (c,d) => {
    return `La soustraction de ${c} - ${d} = ${c - d}`
}
let ex2 = sous(10, 3);
console.log(ex2);

// 3
let mult = (e, f) => {
    return `la multiplication de ${e} * ${f} = ${e * f}`
}
let ex3 = mult(6,9)
console.log(ex3);
// 4
let div = (g,h) => {
    return `la division de ${g} par ${h} = ${g / h}`
}
let ex4 = div(60,10)
console.log(ex4);
// 5
let modulo = (j,k) => {
    return `le modulo de ${j} par ${k} = ${j % k}`
}
let ex5 = modulo(22,2);
console.log(ex5);
// 6
let carre = (l) => {
    return `la racine carré de ${l} = ${Math.sqrt(l)}`
}
let ex6 = carre(25);
console.log(ex6);
// 7
let pow = (m,n) => {
    return `${m} exposant ${n} = ${Math.pow(m,n)}`
}

let ex7 = pow(5,2)
console.log(ex7);
// 8
let cap = (o) => {
    return `${ o[0].toUpperCase() + o.substring(1)}`
}
let ex8 = cap(`je me suis promené`)
console.log(ex8);
// 9
let calcul = (p,q,r) => {
    switch (q) {
        case (q == "+"):
            return `${p} + ${r}`;
            break;
    
        default:
            break;
    }
    
}

let ex9 = calcul(5,q,7);
console.log(ex9);