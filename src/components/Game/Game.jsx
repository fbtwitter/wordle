import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GameOverBanner from '../GameOverBanner/GameOverBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	// Game Status : Running / Won / Lost
	const [gameStatus, setGameStatus] = useState('running')
	const [guesses, setGuesses] = useState([])

	function handleSubmitGuess(tentativeGuess) {
		const nextGuesses = [...guesses, tentativeGuess]

		setGuesses(nextGuesses)

		if (tentativeGuess === answer) {
			setGameStatus('won')
		} else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost')
		}
	}
	return (
		<>
			<GameOverBanner
				gameStatus={gameStatus}
				guesses={guesses}
				answer={answer}
			/>
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				gameStatus={gameStatus}
				handleSubmitGuess={handleSubmitGuess}
			/>
		</>
	)
}

export default Game
