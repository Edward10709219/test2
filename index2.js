//陣列

let classA = ['小白', '小名', '曉華']
console.group('轉學前',classA)
classA.push('郩黃')
console.log('轉學後',classA)

let igPhotos = [
    'https//xx.img.com/a1.png',
    'https//xx.img.com/a2.png',
    'https//xx.img.com/a3.png'
]

console.group('第一筆是:', igPhotos[0])

console.group('igPhotos', igPhotos)

console.log(classA.length)

//物件

const card = {
    name: '阿成的名片',
    address: '台灣',
    age: 25
}
console.log("取出名字:",card.name)

const post ={ //留言
    image: "https//xx.img.com/a1.png",
    desc: "這是圖片",
    date: "2022/11/15",
    comment: ['good','nice','想去']
}

const post2 ={ //留言
    image: "https//xx.img.com/a1.png",
    desc: "這是圖片2",
    date: "2021/23/12",
    comment: ['good','nice','想去','醜']
}

const wall = [ //動態牆
    post,
    post2,
]

console.group('wall',wall)