import {Component} from 'react'

import './index.css'

import BrowseItem from '../browse-item'

class BrowseHistory extends Component {
  constructor(props) {
    super(props)
    {
      const {initialHistoryList} = props
      this.state = {searchInput: '', browseHistoryList: initialHistoryList}
    }
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDelete = id => {
    const {browseHistoryList} = this.state
    const filterList = browseHistoryList.filter(eachItem => eachItem.id !== id)
    this.setState({browseHistoryList: filterList})
  }

  render() {
    const {searchInput, browseHistoryList} = this.state
    const searchedList = browseHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-Container">
        <div className="header-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-image"
            alt="app logo"
          />
          <div className="input-card">
            <div className="search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-image"
                alt="search"
              />
            </div>
            <input
              placeholder="Search history"
              type="Search"
              className="input-el"
              value={searchInput}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <ul className="list-container">
          {searchedList.length > 0 ? (
            searchedList.map(eachItem => (
              <BrowseItem
                browseItem={eachItem}
                key={eachItem.id}
                onDelete={this.onDelete}
              />
            ))
          ) : (
            <p className="no-history-para">There is no History to show</p>
          )}
        </ul>
      </div>
    )
  }
}

export default BrowseHistory
