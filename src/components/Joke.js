import { useState, useEffect } from 'react'
import JokeText from './JokeText'

const Joke = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [joke,setJoke] = useState('')
  const [punchline,setPunchline] = useState('')
  const [error,setError] = useState(false)

  const fetchJoke = async() => {
    try{
      setIsLoading(true)
      let r = await (await (await fetch('https://official-joke-api.appspot.com/random_joke')).json())
      setJoke(r.setup) 
      setPunchline(r.punchline) 
      setIsLoading(false)
      setError(false)
    }
    catch(e){
      setError(true)
    }
  }

  useEffect(()=>{
    fetchJoke()
  },[])

  return (
    <>
      <div className='container'>
        {
          error ? 'something went wrong...' :
          <>
            <JokeText label='Q' text={joke} loading={isLoading}/>
            <JokeText label='A' text={punchline} loading={isLoading}/>
          </>
        }
      </div>
      <button onClick={()=>fetchJoke()}>New Joke</button>
    </>
  )
}

export default Joke