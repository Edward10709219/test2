// let condition = true && false
// console.log('condition', condition)
// let condition2 = !true
// console.log('condition2', condition2)

// if (100<50) {
//     console.log('確實很大')
// } else {
//     console.log('錯誤')
// }

// > < >= <= === !==

let scoreA = 100
let scoreB = 100
let condition = scoreA ===scoreB

if(scoreA > scoreB){
    console.log('A高')
}else if(scoreA < scoreB){
    console.log('B高')
}else{
    console.log('一樣大')
}

// switch case
let key = 100
switch (key) {
    case 100:
     console.log('100分')
     break;
    case 200:
     console.log('200分')
     break;
    default:
     console.log('沒考')
     break;
}