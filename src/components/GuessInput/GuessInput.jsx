import React, { useState } from 'react'

function GuessInput({ gameStatus, handleSubmitGuess }) {
	const [tentativeGuess, setTentativeGuess] = useState('')

	function handleSubmit(e) {
		e.preventDefault()

		handleSubmitGuess(tentativeGuess)
		setTentativeGuess('')
	}

	return (
		<form onSubmit={handleSubmit} className='guess-input-wrapper'>
			<label htmlFor='guess-input'>Enter guess:</label>
			<input
				disabled={gameStatus !== 'running'}
				aria-label='guess-input'
				type='text'
				id='guess-input'
				value={tentativeGuess}
				onChange={(e) => {
					const nextTentativeGuess = e.target.value.toUpperCase()
					setTentativeGuess(nextTentativeGuess)
				}}
				minLength={5}
				maxLength={5}
				pattern='[a-zA-z]{5}'
				title='5 letter word'
			/>
		</form>
	)
}

export default GuessInput
