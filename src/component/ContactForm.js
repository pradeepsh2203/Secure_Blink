import React from "react";
import "../css/contactForm.css";

class ContactForm extends React.Component {
	state = {
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		return (
			<div className="ContactForm">
				<p className="ContactForm-title">
					Fill up the form and our team will get back to
				</p>
				<p className="ContactForm-title">you within 24 hours</p>
				<form className="ContactForm-form">
					<div className="flex space-between wrap">
						<input
							className="ContactForm-input"
							type="text"
							name="name"
							value={this.state.name}
							placeholder="Name"
							onChange={this.handleChange}
						/>
						<input
							className="ContactForm-input"
							type="email"
							name="email"
							value={this.state.email}
							placeholder="Email"
							onChange={this.handleChange}
						/>
					</div>
					<div className="flex space-between wrap ContactForm-margin">
						<input
							className="ContactForm-input"
							type="text"
							name="phone"
							value={this.state.phone}
							placeholder="Phone"
							onChange={this.handleChange}
						/>
						<input
							className="ContactForm-input"
							type="text"
							name="subject"
							value={this.state.subject}
							placeholder="Subject"
							onChange={this.handleChange}
						/>
					</div>
					<textarea
						className="ContactForm-textArea"
						name="message"
						value={this.state.message}
						Placeholder="Message"
						onChange={this.handleChange}
					/>
					<button className="ContactForm-Submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
