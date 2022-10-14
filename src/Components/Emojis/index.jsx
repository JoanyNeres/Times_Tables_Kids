import "./styles.css"
import React, { useState } from 'react';
import { FunFact } from "../FunFact";


export function Emojis(props){

    const emoji_1 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/326/grinning-face_1f600.png"
    const emoji_2 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/red-heart_2764-fe0f.png"
    const emoji_3 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/toss-face/342/tulip_1f337.png"
    const emoji_4 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/basketball_1f3c0.png"
    const emoji_5 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/cat-face_1f431.png"
    const emoji_6 = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/automobile_1f697.png"

    
    const [emoji, saveEmoji] = useState("")

    return(
        <>
        {emoji === "" ?
        (<div className="emoji">
            <img className="arrow_gif" src="https://cdn.discordapp.com/attachments/1016745958727491615/1028381210059223150/arrow_gif.gif"
            alt="Arrow Animation" />
            <div className="emoji_question">
                <h2>Pick a emoji:</h2>
            </div>

            <ul class="emoji_options">
                <li>
                    <input type="radio" name="emoji" id="emoji-1"
                    value={emoji_1} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-1">
                        <img style={{marginRight: "32px"}}
                            src={emoji_1}
                            alt="Grinning Face Emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-2"
                    value={emoji_2} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-2">
                        <img style={{marginRight: "32px"}}
                            src={emoji_2}
                            alt="Red Heart Emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-3"
                    value={emoji_3} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-3">
                        <img style={{marginRight: "32px"}}
                            src={emoji_3}
                            alt="Tulip Flower Emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-4"
                    value={emoji_4} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-4">
                        <img style={{marginRight: "32px"}}
                            src={emoji_4}
                            alt="Basketball Emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-5"
                    value={emoji_5} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-5">
                        <img style={{marginRight: "32px"}}
                            src={emoji_5}
                            alt="Cat Face Emoji"
                        />
                    </label>
                </li>

                <li>
                    <input type="radio" name="emoji" id="emoji-6"
                    value={emoji_6} onClick={(event) => saveEmoji(event.target.value)} />
                    <label for="emoji-6">
                        <img
                            src={emoji_6}
                            alt="Red Car Emoji"
                        />
                    </label>
                </li>
            </ul>
        </div>) :
        <div>
            <div className="emojis_matrix">
                <ul className="emojis_column">
                {Array.from({ length: props.columnMatrix }).map((image, index) =>
                <li>
                    {Array.from({ length: props.rowMatrix }).map((image, index) =>
                        <li>
                            <img className="emoji_matrix" src={emoji}
                            alt="Emoji Selected" />
                        </li>)
                    }
                </li>)
                }
                </ul>
            </div>
            <FunFact
            FunFactNumber = {props.resultOperation}
            />
        </div>
        }
        </>
    )
}