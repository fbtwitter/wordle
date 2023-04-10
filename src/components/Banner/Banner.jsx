import React from 'react'

function Banner({ status, children }) {
	return <div className={`${status} banner`}>{children}</div>
}

export function WonBanner({ numOfGuesses }) {
	return (
		<Banner status={'happy'}>
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
				</strong>
				.
			</p>
		</Banner>
	)
}

export function SadBanner({ answer }) {
	return (
		<Banner status='sad'>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</Banner>
	)
}
export default Banner
