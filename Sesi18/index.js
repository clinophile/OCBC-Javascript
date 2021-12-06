const laptop = {
    processor : 'Intel Pentium 4',
    RAM : 8,
    display : 'fullHD',
    storageType : 'SSD',
    storageSize: 1024
}

//console.log(laptop)


function removeSpace(text) {
    var result = '';
    result = text.replaceAll(' ','');
    return result;
}

function reverseText(text){
    var result = '';
    for( let i = text.length-1 ; i >= 0 ; i--) {
        result += text[i] ;
    }

    return result;
}

function updateVowels(text){
    var result = '' ;

    const mapper = {
        a: 'b', e: 'f', i: 'j', o: 'p', u: 'v',
        A: 'B', E: 'F', I: 'J', O: 'P', U: 'V'
      }

    result = text.replace(/[aeiou]/gi, match => mapper[match]);
    return result;

}


var password = 'dimitri w';
var spaceRes = removeSpace(password);
var reverseRes = reverseText(spaceRes);
var vowelRes = updateVowels(spaceRes);

console.log(spaceRes);
console.log(reverseRes);
console.log(vowelRes);