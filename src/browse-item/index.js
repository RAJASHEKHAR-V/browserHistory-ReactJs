import './index.css'

const BrowseItem = props => {
  const {browseItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browseItem

  const onDeleteButton = () => {
    onDelete(id)
  }

  return (
    <li className="list-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-detail-card">
        <div className="domain-main">
          <img src={logoUrl} className="log-url" alt="domain logo" />
          <div className="domain-card">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            className="button"
            type="submit"
            onClick={onDeleteButton}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default BrowseItem
