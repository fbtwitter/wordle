import React from 'react'

function GameOverBanner({ gameStatus, guesses, answer }) {
	if (gameStatus === 'won')
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in{' '}
					<strong>{guesses.length} guesses</strong>.
				</p>
			</div>
		)
	else if (gameStatus === 'lost')
		return (
			<div className='sad banner'>
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		)
}

export default GameOverBanner
