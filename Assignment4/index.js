const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan angka pertama: ", function(a) {
    rl.question("Masukan angka kedua: ", function(b) {
        
        a = parseInt(a);
        b = parseInt(b);

        var tambah = a + b;
        var kurang = a - b;
        var kali = a * b ;
        var bagi = a / b ;
        var modulus1 = a % b ;
        var incrementA = a ;
        incrementA++ ;
        var decrementB = b ;
        decrementB--;



        console.log(`Hasil Addition (+): ${tambah}`);
        console.log(`Hasil Subtraction (-): ${kurang}`);
        console.log(`Hasil Multiplication (*): ${kali}`);
        console.log(`Hasil Division (/): ${bagi}`);
        console.log(`Hasil Modulus (%): ${modulus1}`);
        console.log(`Hasil Increment num1 (${a}++): ${incrementA}`);
        console.log(`Hasil Decrement num2 (${b}--): ${decrementB}`);

        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nTerimakasih !!!");
    process.exit(0);
});


