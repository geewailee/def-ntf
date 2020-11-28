import React from "react";
import CharactersMoreDetails from "./CharactersMoreDetails.jsx";

const CharactersDetails = ({ id, name, image, origin, location, species, status, type }) => {
  return (
    <div className='card'>
      <img src={image} alt='character image failed to load' />
      <h4>{name}</h4>
      <h4>Origin: {origin}</h4>
      {
        <CharactersMoreDetails
          key={id}
          id={id}
          location={location}
          species={species}
          status={status}
          type={type}
        />
      }
    </div>
  );
};

export default CharactersDetails;
