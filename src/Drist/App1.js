import { useState } from "react";
import { sculptureList } from "./Data1.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPast = index >= 1;
  //len = sculptureList.length;

  function handleNextClick() {
    if (hasNext) {
      console.log(hasNext);
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handlePastClick() {
    if (hasPast) {
      setIndex(index - 1);
    } else {
      setIndex(11);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePastClick}>Past</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
