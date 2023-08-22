import { useState } from "react"
import './Toggler.css'
export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true)
    const togglerIsHappy = () => setIsHappy(!isHappy)
    return (
        <p className="Toggler" onClick={togglerIsHappy} >{isHappy ? 'hahaha' : 'wuuuu'}</p>
    )
}