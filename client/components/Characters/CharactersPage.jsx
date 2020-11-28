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
      <div className='cards'>
        {characters.map(item => (
          <CharactersDetails
            key={item.id}
            id={item.id}
            image={item.image}
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
    </div>
  );
};

export default CharactersPage;
