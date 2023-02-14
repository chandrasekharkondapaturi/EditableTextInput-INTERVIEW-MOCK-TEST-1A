import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  state = {isClicked: false, ent: ''}

  one = event => {
    this.setState({ent: event.target.value})
  }

  start = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked, ent} = this.state
    return (
      <div className="main-con">
        <div className="c-con">
          <h1 className="header">Editable Text Input</h1>
          <div className="inp-con">
            {isClicked === true ? (
              <div className="p-con">
                <p className="p">{ent}</p>
                <button type="button" className="but" onClick={this.start}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={ent}
                  className="inp"
                  onChange={this.one}
                />
                <button className="but" type="button" onClick={this.start}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
