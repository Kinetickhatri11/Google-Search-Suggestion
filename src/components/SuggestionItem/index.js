// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, selectedInput} = props
  const onSelect = () => {
    selectedInput(suggestionItem.suggestion)
  }
  return (
    <li className="list-item" onClick={onSelect}>
      <p className="suggestion">{suggestionItem.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}
export default SuggestionItem
