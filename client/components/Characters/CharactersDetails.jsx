import React, { useState } from "react";
import CharactersMoreDetails from "./CharactersMoreDetails.jsx";

const CharactersDetails = ({ id, name, origin, location, species, status, type }) => {
  return (
    <div>
      <li>ID: {id}</li>
      <li>Name: {name}</li>
      <li>Origin: {origin}</li>
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
