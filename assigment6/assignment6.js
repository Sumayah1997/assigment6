var _ = require('underscore');
// //1-function to reverse a String 
function ReverseString(str)
{
    const Rstr = str.split("").reverse().join('');
    console.log(Rstr);
}
ReverseString('Sumayah');

// //2-function to check whether a String is Palindrome or not
function CheckPallindrome(str){

    const Rstr = str.split("").reverse().join('');
    return str === Rstr;

}
console.log(CheckPallindrome('madam'));
console.log(CheckPallindrome('mom'));
// //3-function to calculate the number of Vowels & Consonants in a string...
function calcVowel(string)
{
    const vowels ='aeiou';
    let vowCount = 0;
    let consCount = 0;
    string = string.replace(/\s/g,'');
    for(let char of string.toLowerCase())
    {
        if(vowels.includes(char))
        vowCount++;
        else
        consCount++;
    }return `Vowels Number is ${vowCount} \n Consonants Number is ${consCount}`
}console.log(calcVowel("Frontend bootcamp"))

//4- function to find the common Elements in an array....

function CheckCommon(arr1,arr2)
{
    console.log(_.intersection(arr1,arr2));
}
let arr1 = [11,23,24,25,14];
let arr2 = [10,11,12,13,14];
CheckCommon(arr1,arr2);


//5- function to check if a string ia an Anagram of another String or not 
function CheckAnagram(str1,str2)
{
    const Str1New = str1.toLowerCase().split('').sort().join('');
    const Str2New = str2.toLowerCase().split('').sort().join('');
    return Str1New === Str2New;
}
console.log(CheckAnagram("and","Dan"));
console.log(CheckAnagram("abc","Cba"));
console.log(CheckAnagram("Noha","Maha"));

