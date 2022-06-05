//For

//i++
//i+=2
// for (let i=0; i <=10; i++){
//     console.log(i)
// }

// let classA = [70,60,90]
// // for (let i=0; i < classA.length; i++){
// //     classA[i]+=10
// // }
// // console.log(classA)

// for(let i = 0; i < classA.length; i++){
//     if (i===2) {
//         classA[i] = 999
//     }
// }

// console.log(classA)

let posts = [
    {
        name: 'Dick',
        desc: '貼文一'
    },
    {
        name: 'Dick2',
        desc: '貼文二'
    },
]

for (let i = 0; i < posts.length; i++){
    if (i === 1 ){
        let post = posts[i]
        console.log(post.name)
    }
}

//While

let condition = true
let target = 10
let j = 0

while (j < target) {
    console.log(j)
    j++
}