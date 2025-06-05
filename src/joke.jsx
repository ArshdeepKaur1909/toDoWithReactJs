import {useEffect, useState} from "react"

function Joke(){
  const URL = "https://icanhazdadjoke.com/slack";
  const [joke, setJoke] = useState("");
  
  let getNewJoke = async function (){
    let jokeResponse = await fetch(URL);
    let jsonJoke = await jokeResponse.json();
    
    setJoke(jsonJoke.attachments[0].text);
  }

  // using useEffect() in order to show already fetched joke on mainPage as soon it loads
  useEffect( function (){
   let getNewJoke = async function (){
     let jokeResponse = await fetch(URL);
     let jsonJoke = await jokeResponse.json();

     return jsonJoke.attachments[0].text
   }

   let joke = getNewJoke();
   setJoke(joke);
  }, [])

  return(
    <>
      <h1>Jokes</h1>
      <h2>{joke}</h2>
      <button onClick={getNewJoke} >New Joke!</button>
    </>
  );
}

export default Joke;