import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { SadBanner, WonBanner } from '../Banner/Banner'

// Pick a random wsord on every pageload.
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
			<GuessResults guesses={guesses} answer={answer} />
			<GuessInput
				gameStatus={gameStatus}
				handleSubmitGuess={handleSubmitGuess}
			/>
			{gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
			{gameStatus === 'lost' && <SadBanner answer={answer} />}
		</>
	)
}

export default Game
