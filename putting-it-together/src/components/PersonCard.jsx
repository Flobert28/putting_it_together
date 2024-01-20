import React, {useState} from "react";

const PersonCard = (props) => {
  const [mosha, setMosha] = useState(props.age);
  const click = () => {
    setMosha(mosha + 1)
  }
  return(
    <div>
      <h1>{props.firstName}</h1>
      <p>Age: {mosha}</p>
      <p>Hair Color: {props.hairC}</p>
      <button onClick={click}>Birthday Button for {props.fullName}</button>
    </div>
  )
}

export default PersonCard;