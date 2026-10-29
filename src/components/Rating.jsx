export default function Rating({ value }) {
  return (
    <span className="stars" aria-label={`${value} out of 5`}>
      {'★'.repeat(value)}<span className="off">{'★'.repeat(5 - value)}</span>
    </span>
  )
}
