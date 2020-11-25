import React, { useState } from "react";

const CharactersMoreDetails = ({ id, location, species, status, type }) => {
  const [moreInfo, setInfo] = useState(false);
  const onClick = () => {
    setInfo(true);
  };
  return (
    <div>
      <div>
        {!moreInfo && <button onClick={onClick}>More Information</button>}
        {moreInfo && (
          <div>
            {location ? <li>location: {location}</li> : null}
            {species ? <li>species: {species}</li> : null}
            {status ? <li>status: {status}</li> : null}
            {type ? <li>type: {type}</li> : null}
          </div>
        )}
        <br />
      </div>
    </div>
  );
};
export default CharactersMoreDetails;
