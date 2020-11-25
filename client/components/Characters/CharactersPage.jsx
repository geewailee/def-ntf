import React, { useEffect, useState } from "react";
import CharactersDetails from "./CharactersDetails.jsx";
const CharactersPage = () => {
  const [change, setChange] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setChange(false);
    getItem();
  }, [change]);

  const getItem = async e => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const jsonData = await res.json();
      setCharacters(jsonData.results);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  return (
    <div className='container'>
      <h1>Characters</h1>
      {characters.map(item => (
        <CharactersDetails
          key={item.id}
          id={item.id}
          name={item.name}
          origin={item.origin.name}
          location={item.location.name}
          origin={item.origin.name}
          species={item.species}
          status={item.status}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default CharactersPage;

// Show 18 characters with their name and origin. Also add a “more information” button which when clicked can show all the available information regarding the characters (excluding URLs).
