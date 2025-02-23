new Set([1,1,2,2,3,4]) // {1,2,3,4}


[...new Set("referee")].join("") // 'ref'


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
// Map(2) {Array(3) => true, Array(3) => false}
 


hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = Arr => NEW Set(arr).size

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowel(char){
    return "aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for (let char of str){
        let lowerCaseChar = char.toLowerCase;
        if(vowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar,vowelMap.get);
                else{
                    vowelMap.set(lowerCaseChar)
                }
            }
        }
    }
    return vowelMap
}


