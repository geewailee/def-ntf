import React, { useState } from "react";
import EpisodesMoreDetails from "./EpisodesMoreDetails.jsx";

const EpisodesDetails = ({ id, air_date, created, episode, episodeName, characters }) => {
  return (
    <div>
      <li>air_date: {air_date}</li>
      <li>episode: {episode}</li>
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
