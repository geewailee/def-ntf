import React from "react";
import EpisodesMoreDetails from "./EpisodesMoreDetails.jsx";

const EpisodesDetails = ({ id, air_date, created, episode, episodeName, characters }) => {
  return (
    <div className='card'>
      <h4>{episodeName}</h4>
      <h4>{air_date}</h4>
      {
        <EpisodesMoreDetails
          key={id}
          created={created}
          episodeName={episodeName}
          characters={characters}
        />
      }
    </div>
  );
};

export default EpisodesDetails;
