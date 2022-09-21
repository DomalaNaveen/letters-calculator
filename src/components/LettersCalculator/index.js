import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form action="search">
            <label htmlFor="search" className="phrase">
              Enter the Phrase
            </label>
            <input
              type="text"
              className="search-input"
              placeholder="Enter the phrase"
              onChange={this.onChangeInput}
              value={searchInput}
              id="search"
            />
          </form>

          <div className="value-container">
            <p className="count-para">No.of letters: {searchInput.length}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
