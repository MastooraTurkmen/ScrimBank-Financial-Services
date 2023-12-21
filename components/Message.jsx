import React from "react"

export default function Message({ status }) {
	let checkType
	let message

	if (status === undefined) {
		checkType = "neutral"
		message = "Enter verification code to continue."
	} else if (status) {
		checkType = "correct"
		message = "Verified!"
	} else {
		checkType = "incorrect"
		message = "Incorrect code."
	}

	return (
		<div className="message-container">
			<p className="message">{message}</p>
			<img src={`./images/${checkType}-check.svg`} className="check" />
		</div>
	)
}
