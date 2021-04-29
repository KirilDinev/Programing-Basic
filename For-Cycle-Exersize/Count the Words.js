function countTheWords(text){
    let spaceCount = 0;

    for( let i = 0; i < text.length; i++ ){
        if(text[i] === " "){
            spaceCount++
        }
    }
    let WordsCount = spaceCount + 1;

    if(WordsCount <= 10 ){
        console.log("The message was send successfully!")
    } else {
        console.log(`The message is too long to be send!Has ${WordsCount} words.`)
    }

}
countTheWords("This message has exactly eleven words. One more as it's allowed!")
;