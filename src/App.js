import React, { useState } from "react";
import "./styles.css";
var emojis = {
  "ð": "Grinning face",
  "ð": "Beaming face with smiling eyes",
  "ð": "Face with tears of joy",
  "ðĪĢ": "Rolling on floor laughing",
  "ð": "Grinning face with big eyes",
  "ð": "Grinning face with smiling eyes",
  "ð": "Grinning face with sweat",
  "ð": "Grinning squinting face",
  "ð": "Winking face",
  "ð": "Smiling face with smiling eyes",
  "ð": "Face savouring food",
  "ð": "Smiling face with sunglasses",
  "ð": "Smiling face with heart eyes",
  "ð": "Face blowing a kiss",
  "ð": "Winking face with tongue",
  "ð": "Squinting face with tongue",
  "ðĪĪ": "Drooling face",
  "ð": "Uamused face",
  "ð": "Downcast face with sweat",
  "ð": "Pensive face",
  "ð": "Confused face",
  "ð": "Upside down face",
  "ðĪ": "Money mouth face",
  "ðē": "Astonished face",
  "âđïļ": "Frowning face",
  "ð": "Slightly frowning face",
  "ð": "Confounded face",
  "ð": "Disappointed face",
  "ð": "Worried face",
  "ðĪ": "Face with steam from nose",
  "ðĒ": "Crying face",
  "ð­": "Loudly crying face",
  "ðĶ": "Frowning face with mouth open",
  "ð§": "Anguished face",
  "ðĻ": "Fearfull face",
  "ðĐ": "Weary face",
  "ðĪŊ": "Exploding head",
  "ðŽ": "Grimacing face",
  "ðŪâðĻ": "Face exahling",
  "ð°": "Anxious face with sweat",
  "ðą": "Face screaming in fear",
  "ðĨĩ": "Hot face",
  "ðĨķ": "Cold face",
  "ðģ": "Flushed face",
  "ðĪŠ": "Zany face",
  "ðĩ": "Knocked out face",
  "ðĩâðŦ": "Dizzy face",
  "ðĨī": "Woozy face",
  "ð ": "Angry face",
  "ðĨš": "Pleading face",
  "ðĪ ": "Cowboy hat face",
  "ðĪĨ": "Lying face",
  "ðĪŦ": "Shushing face",
  "ðĪ­": "Face with handover mouth",
  "ð§": "Face with monocle",
  "ðĪ": "Nerd face",
  "ðŧ": "Ghost",
  "ð·": "Pig",
  "ðĶ": "Zebra",
  "ðĶ": "Unicorn",
  "ðŦ": "Camel",
  "ðĩ": "Monkey",
  "ðķ": "Dog",
  "ðĪ": "black heart",
  "âĪ": "Red Heart",
  "ð": "broken Heart",
  "ð": "kiss mark",
  "ðž": "panda face",
  "ð": "kaimm",
};
var ekeys = Object.keys(emojis);
function Interpreter() {
  const [inputMeaning, emojiMeaning] = useState("");
  function eInput(e) {
    var Input = e.target.value;
    var meaning = emojis[Input];
    if (meaning === undefined) {
      meaning = "Not Found";
    }
    emojiMeaning(meaning);

  }
  function emojiClickHandler(emoji) {
    var meaning = emojis[emoji];
    emojiMeaning(meaning);
  }


  return (
    <div className="container">
      <b><p>Enter here : </p></b>
      <input onChange={eInput} />
      <p>{inputMeaning}</p>
      <b><p>You Can Choose from here ð </p></b>
      {ekeys.map(function (keys) {
        return (
          <span onClick={() => emojiClickHandler(keys)}>{keys}</span>
        );
      })}
    </div>
  );
}
export default Interpreter;