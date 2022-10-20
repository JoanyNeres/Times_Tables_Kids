import "./styles.css"
import React, { useState } from 'react';
import { Emojis } from "../Emojis";

export function Machine(props){
    

    let [operation, setOperation] = useState("")

    const generateOperation = (event) => {
        event.preventDefault()
        setOperation(operation = props.numbersMachine)
    }

    const [answerUser, saveAnswer] = useState("")

    let [textForAnswer, setText] = useState("")

    const checkAnswer = (event) => {
        event.preventDefault()
        setText(textForAnswer = (Number.parseInt(answerUser) === props.resultOperation)
            ? "Well done!"
            : "Try again!")
    }

    return(
        <>
        <div className="machine">
                <img className="machine_gif" src="https://cdn.discordapp.com/attachments/1016745958727491615/1032814284503253082/mult_machine_gif.gif"
                alt="Multiplication Machine Animation"/>
                <div className="ejector_machine">
                    <buttom className="button_pressme" onClick={generateOperation}>
                        PRESS ME
                    </buttom>
                </div>
                <div className="expression">
                <p>{operation}</p>
                </div>
                {operation !== "" && (
                <div className="operation">
                    <div className="answer">
                    <form>
                        <label htmlFor="result_user">Answer:</label>
                        <input className="field" id="answer_user" type="number" required
                        value={answerUser}
                        onChange={(event) => saveAnswer(event.target.value)} />
                        
                        <buttom onClick={checkAnswer}
                            className="button_send" type="submit">
                            SEND
                        </buttom>
                        <h2 className="text_answer">{textForAnswer}</h2>
                    </form>
                    </div>
                </div>
                )}
        </div>
        {textForAnswer === "Well done!" &&
            <Emojis
            rowMatrix = {props.number1}
            columnMatrix = {props.number2}
            resultOperation = {props.resultOperation}
            />
        }
        </>
    )
}