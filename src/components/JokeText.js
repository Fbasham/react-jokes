const JokeText = ({label,text,loading}) => (
  <div className='joke-text'>
    <span className='placeholder'>{label}: </span>
    <span>{loading ? '...loading' : text}</span>
  </div>
)

export default JokeText