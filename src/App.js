import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😺": "Grinning Cat",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😊": "Smiling",
  "😳": "disbelief",
  "😑": "annoyance",
  "🤪": "zany face",
  "😏": "smirking face",
  "😎": "Smiling Face with Sunglasses",
  "👍": "thumbs up"
};

var emojisWeKNow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
    } else {
      setMeaning("Sorry we cannot recognize this emoji");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <div className="main-heading">
        <h1>Know your emotions</h1>
      </div>
      <input
        placeholder="Enter your Emoji here"
        onChange={emojiInputHandler}
      ></input>
      <div className="emoji-meaning">{meaning}</div>
      <h3>Emojis we are aware of..</h3>
      {emojisWeKNow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
