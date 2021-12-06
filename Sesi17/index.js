//primitive
var angka = (10+5) * 4-8 / 4 % 9             //angka
var kata = "Budi"           //string
var hungry = true            //boolean
var tidakAda = undefined    //kosong



//special primitive
console.log(typeof null) //print type data

//structural
var objek = {}      //object kosong --kurung kumis
var urutan = []     //array kosong --kurung kotak


// let ->  tidak bisa dideklarasi ulang
// var -> bisa dideklarasi ulang
// const -> setelah dideclare, tidak bisa diganti nilainya

if(hungry) {
    // ` ` -> backtick -> template literals
    // ${variable} -> variable
    console.log (`${kata} is hungry`)
} else {
    console.log (`${kata} is full`)
}

let participants = ['Ika', 'David', 'Widya', 'Oki']

participants.forEach((participant, index) => {
    participants[index] = `${participant} ${index}`
})

console.log(participants)

