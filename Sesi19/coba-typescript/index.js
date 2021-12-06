var hello = 12;
console.log(hello);
//anotasi array
var participants = [1, 2];
//contoh 1 array banyak variable (string + number)
var contoh = [1, 'holla'];
var contoh2 = [1, 'holla'];
var otherParticipants = [
    { name: 'Alwi' }
];
//contoh function
function sum(a, b) {
    return a + b;
}
//contoh class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var dini = new Person('Dini');
dini.setAge(23);
console.log(dini);
/**
 * global :
 * npm install -g typescript
 * jalankan :
 * tsc <nama_file>.ts
 * node <nama_file>.js
 */ 
