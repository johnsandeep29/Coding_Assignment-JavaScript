function reverseWordsInSentence(sentence) {
    const words = sentence.split(" "); // Split the sentence into words
    const reversedWords = words.map(reverseWord); // Reverse each word
    return reversedWords.join(" "); // Join the reversed words back into a sentence
}

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

const inputSentence = "This is a sunny day";
const reversed = reverseWordsInSentence(inputSentence);
console.log(reversed);
