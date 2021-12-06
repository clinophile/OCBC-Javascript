let hello: number = 12;

console.log(hello);

//anotasi array
let participants: number[] = [1, 2]

//contoh 1 array banyak variable (string + number)
let contoh: (number | string) [] = [1, 'holla']
let contoh2: Array<number | string> = [1, 'holla']

type Participant = {
    name : string
    age? : number //<<<<< optional property = bisa diisi atau null
}

let otherParticipants: Participant[] = [
    {name : 'Alwi'}
]



//contoh function
function sum (a:number, b:number):number {
    return a + b;
}

//contoh class
class Person {
    age?:number

    constructor(public name: string) {}

    setAge(age:number) {
        this.age = age;
    }
}


const dini = new Person('Dini')
dini.setAge(23)

console.log(dini)


/**
 * global :
 * npm install -g typescript
 * jalankan : 
 * tsc <nama_file>.ts
 * node <nama_file>.js
 */