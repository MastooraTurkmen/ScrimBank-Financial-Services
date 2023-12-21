import React from "react"
import Message from "./components/Message"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
	const passCode = "1001"

	const [userInput, setUserInput] = React.useState({
		charOne: "",
		charTwo: "",
		charThree: "",
		charFour: "",
	})
	
	const [verified, setVerified] = React.useState(undefined)
	function handleChange(event) {
		setUserInput(prev => ({...prev, [event.target.name]: event.target.value }))
	}
	
	function handleSubmit(event) {
		event.preventDefault()
		const combinedInput = Object.values(userInput).join("")
		setVerified(combinedInput === passCode)
	}

	return (
		<div className="wrapper">
			<Header />

			<form onSubmit={handleSubmit}>
			
				<Message status={verified} />

				<div>
					<input
						required
						type="password"
						name="charOne"
						maxLength="1"
						onChange={handleChange}
					/>

					<input 
						required 
						type="password" 
						name="charTwo" 
						maxLength="1"
						onChange={handleChange} 
					/>

					<input 
						required 
						type="password" 
						name="charThree" 
						maxLength="1" 
						onChange={handleChange}
					/>

					<input 
						required 
						type="password" 
						name="charFour" 
						maxLength="1" 
						onChange={handleChange}
					/>
					
				</div>

				<button disabled={verified}>Submit</button>
			</form>

			<Footer />
		</div>
	)
}
