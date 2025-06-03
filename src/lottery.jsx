import {useState} from "react"

function Lottery(){
    const [ticket, setTicket] = useState("")
    const [heading, setHeading] = useState("Lottery")
    
    const generateTicket = function(){
        let randomNumber = Math.floor(Math.random()*900) + 100;
        let stringNumber = new String(randomNumber);
        setTicket(stringNumber);
        
        let sum = 0;
        for(const digit of stringNumber){
            let numDigit = new Number(digit);
            sum += numDigit;
        }

        if(sum === 15){
          setHeading("Lottery!! You Won!! Congratulations");
        }else{
          setHeading("Oops! Try Again");
        }
    }

    return(
    <>
      <h1>{heading}</h1>
      <p>Lottery Ticket = {ticket} </p>
      <button onClick={generateTicket} >Get Lottery Ticket</button>
    </>
  );
}

export default Lottery;