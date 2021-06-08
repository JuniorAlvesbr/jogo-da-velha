import './styles.css'

function EventTag({ content, className = "" }) {
  return (
    <output className={`event-tag ${className}`}>{content}</output>
  )
}

export default EventTag