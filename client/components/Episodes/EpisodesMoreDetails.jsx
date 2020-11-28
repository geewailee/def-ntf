import React, { useState, useEffect } from "react";
import EpisodesCharacters from "./EpisodesCharacters.jsx";

const EpisodesMoreDetails = ({ created, episodeName, characters }) => {
  const [moreInfo, setInfo] = useState(false);
  const [Data, setData] = useState([]);
  const onClick = () => {
    setInfo(true);
  };
  useEffect(() => {
    fetchCharacters();
  }, []);
  const getCharacters = characters => {
    let str = "https://rickandmortyapi.com/api/character/";
    characters.map(url => {
      let splitUrl = url.split("character/");
      let num = splitUrl[1];
      str += `${num},`;
    });
    return str.slice(0, str.length - 1);
  };
  const fetchCharacters = async e => {
    try {
      const res = await fetch(getCharacters(characters));
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };

  return (
    <div className='more-details'>
      {!moreInfo && <button onClick={onClick}>More Information</button>}
      {moreInfo && (
        <div>
          {created ? <h4>Created on {created}</h4> : null}
          <label htmlFor='characters'>Characters </label>
          {Data.map((character, i) => (
            <EpisodesCharacters key={i} characterName={character.name} />
          ))}
        </div>
      )}
      <br />
    </div>
  );
};
export default EpisodesMoreDetails;
