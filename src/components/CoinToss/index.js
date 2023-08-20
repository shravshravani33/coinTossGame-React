import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {tossClick: 0, headsCount: 0, tailsCount: 0}

  onTossClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)

    if (tossResult) {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    } else {
      this.setState(prevState => ({headsCount: prevState.headsCount + 1}))
    }

    this.setState({tossClick: tossResult})
  }

  render() {
    const {tossClick, headsCount, tailsCount} = this.state
    const headsOrTails = tossClick
      ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

    return (
      <div className="main-div">
        <div className="inner-div">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={headsOrTails} alt="toss result" className="coin-decor" />
          <button
            type="button"
            className="btn-decor"
            onClick={this.onTossClick}
          >
            Toss Coin
          </button>
          <div className="counts-div">
            <p>Total:{headsCount + tailsCount}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
