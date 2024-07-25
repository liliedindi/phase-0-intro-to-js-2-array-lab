let cats =["Milo","Otis","Garfield"];

beforeEach= function (){
    cats.length = 0
    cats.push('Milo', 'Otis', 'Garfield')
}

function destructivelyAppendCat(name){ 
    cats.push (name)
    return cats
}

function destructivelyPrependCat (name){
    cats.unshift(name)
    return cats
}
//console.log(destructivelyPrependCat('Bob'));

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
//console.log(destructivelyRemoveLastCat())

function destructivelyRemoveFirstCat (){
    cats.shift()
    return cats
}
//console.log(destructivelyRemoveFirstCat())

function appendCat(name){
    let newCat=[...cats,name]
    return newCat
}
//console.log(appendCat('Broom'))

function prependCat(name){
    let thisCat=[name,...cats]
    return thisCat
}
//console.log (cats)
 
function removeLastCat(){
    let deleteCat= cats.slice(0,-1)
    return deleteCat
}
//console.log(cats);
 
function removeFirstCat(){
    let removeCat= cats.slice(1)
    return removeCat
}
//console.log(removeFirstCat())