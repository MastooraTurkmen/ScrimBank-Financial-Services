import React from "react"
import correct from "../images/correct-check.svg"
import incorrect from "../images/incorrect-check.svg"

export default function Message({ status }) {
	let checkType
	let message

	if (status === undefined) {
		checkType = "neutral"
		message = "Enter verification code to continue."
	} else if (status) {
		checkType = {correct}
		message = "Verified!"
	} else {
		checkType = {incorrect}
		message = "Incorrect code."
	}

	return (
		<div className="message-container">
			<p className="message">{message}</p>
			<img src={`${checkType}`} className="check" />
		</div>
	)
}
