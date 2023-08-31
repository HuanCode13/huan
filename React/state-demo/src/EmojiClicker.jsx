import { v4 as uuid } from "uuid"
import { useState } from "react";

function randomEmoji() {
    const choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    return choices[Math.floor(Math.random() * choices.length)]
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }])

    const addEmoji = () => {
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmoji() }])
    }

    const deleteEmoji = (id) => {
        setEmojis((prevEmojis) => {
            return prevEmojis.filter((e) => e.id !== id)
        })
    }

    const makeEverythingAH = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return { ...e, emoji: 'H' }
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: '4rem' }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingAH}>Make them all H</button>
        </div>
    )
}