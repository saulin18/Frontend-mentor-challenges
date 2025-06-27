 //Detect Pangram
//273165092% of 13,771433 of 196,363anindyabd5 Issues Reported
//TypeScript
//4.9
//VIM
//EMACS
//Instructions
//Output
//A pangram is a sentence that contain
// s every single letter of the alphabet a
// t least once. For example, the sentence
//  "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 
 //
 
 function isPangram(string){
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return string.split('').every(letter => alphabet.includes(letter));
 }