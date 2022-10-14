import "./styles.css"

export function FunFact(props){

    const funFactsSentences = [
        "In 1 day, the Earth revolves around itself.",
        "A bipedal animal uses 2 legs to move.",
        "A triangle has 3 sides.",
        "A square has 4 equal sides.",
        "Humans have 5 fingers on each hand.",
        "A cube has 6 faces and all of them are identical squares.",
        "There are 7 colors in the rainbow: red, orange, yellow, green, blue, indigo and violet.",
        "There are 8 planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
        "The word \"community\" has 9 letters.",
        "The word \"friendship\" has 10 letters.",
    ]
    
    const sentenceForPalindromicNumber = props.FunFactNumber + " is a palindromic number, it remains the same when its digits are reversed."

    const sentenceForEvenNumber = props.FunFactNumber + " is an even number."

    const sentenceForOddNumber = props.FunFactNumber + " is an odd number."

    function findFunFact(){

        let funFact = funFactsSentences.filter(sentence => 
            sentence.includes(props.FunFactNumber.toString()))

        if (funFact.length < 1){

            funFact = props.FunFactNumber.toString() === props.FunFactNumber.toString().split('').reverse().join('')
            ? sentenceForPalindromicNumber :
            props.FunFactNumber %2 === 0
            ? sentenceForEvenNumber
            : sentenceForOddNumber
        }
        return <p>{funFact}</p>
    }

    const refreshPage = () => { 
        window.location.reload(); 
    }


    return(
        <div className="funFact_box">
            <div className="funFact_content">
                <h2>Fun Fact About {props.FunFactNumber}:</h2>
                <h2 className="funFact_sentence">{findFunFact()}</h2>
            </div>
            <div>
                <button onClick={refreshPage} className="button_restart">
                    RESTART
                </button>
            </div>
        </div>
    )
}