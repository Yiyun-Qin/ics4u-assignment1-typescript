/**
 * The rock, paper, scissor game, if you doesn't win in 5 turns,
 * the program will finish.
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-10-31
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
let turn = 0
let random: string = ''
let randomNumber: number = -1

console.log('Rock, paper, scissor game!')
for (let loopCounter = 0; loopCounter < loopCounter + 1; loopCounter++) {
  randomNumber = Math.floor(Math.random() * 3) + 1
  if (randomNumber === 1) {
    random = 'rock'
  } else if (randomNumber === 2) {
    random = 'paper'
  } else if (randomNumber === 3) {
    random = 'scissor'
  }
  const choose = prompt('Please choose one from rock, paper and scissor: ')
  console.log(`The computer chooses ${random}.`)
  if (choose === 'rock' || choose === 'paper' || choose === 'scissor') {
    if (choose === random) {
      console.log('Tie.')
    } else {
      if (random === 'rock') {
        if (choose === 'paper') {
          break
        } else {
          console.log('You lose!')
        }
      }
      if (random === 'paper') {
        if (choose === 'scissor') {
          break
        } else {
          console.log('You lose!')
        }
      }
      if (random === 'scissor') {
        if (choose === 'rock') {
          break
        } else {
          console.log('You lose!')
        }
      }
    }
  } else {
    console.log('Please choose one from rock, paper and scissor!')
  }
  console.log('Please try again.\n')
  turn = loopCounter + 1
  if (turn + 1 > 5) {
    break
  } else {
    continue
  }
}
turn = turn + 1
if (turn > 5) {
  console.log("\nYou don't win in 5 turns!")
} else {
  console.log('\nYou win!')
  console.log(`It takes you ${turn} turns to win the game.`)
}
console.log('\nDone.')
