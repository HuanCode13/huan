import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'
import LuckyN from './luckyN'
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
import Lucky7 from './Lucky7'
import Die from './Die'
import Dice from './Dice'
import Box from './Box'

function lessThan4(dice) {
  return sum(dice) < 4
}
// ===LuckyN===


function allSameValue(dice) {
  return dice.every(v => v === dice[0])
}
// ===LuckyN===



function App() {

  return (
    <>
      {/* <h1>State Demo!</h1>
      <Counter />
      <Dumbo /> */}
      {/* <ScoreKeeper numPlayers={10} taget={3} /> */}
      {/* <EmojiClicker /> */}
      {/* <Dice dice={[3, 6, 1]} />
      <Dice dice={[1, 2, 3, 2, 5]} color='red' />
      <Dice dice={[2, 4, 1]} /> */}
      {/* <LuckyN winCheck={lessThan4} title='Roll less than 4' />
      <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same number' /> */}
      {/* <Box />
      <Box />
      <Box /> */}
      <BoxGrid />

    </>

  )
}

export default App
