import React, { useEffect, useState } from "react";
import EpisodesDetails from "./EpisodesDetails.jsx";
const EpisodesPage = () => {
  const [change, setChange] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    setChange(false);
    getItem();
  }, [change]);

  const getItem = async e => {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const jsonData = await res.json();
      setData(jsonData.results);
    } catch (error) {
      console.log(`error ${error}`);
    }
  };
  return (
    <div className='episodesPage'>
      <div className='cards'>
        {Data.map(item => (
          <EpisodesDetails
            key={item.id}
            id={item.id}
            air_date={item.air_date}
            created={item.created}
            episode={item.episode}
            episodeName={item.name}
            characters={item.characters}
          />
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;
