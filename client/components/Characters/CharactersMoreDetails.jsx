import React, { useState } from "react";

const CharactersMoreDetails = ({ location, species, status, type }) => {
  const [moreInfo, setInfo] = useState(false);
  const onClick = () => {
    setInfo(true);
  };
  return (
    <div>
      <div className='more-details'>
        {!moreInfo && <button onClick={onClick}>More Information</button>}
        {moreInfo && (
          <div>
            {location ? <h4>Location: {location}</h4> : null}
            {species ? <h4>Species: {species}</h4> : null}
            {status ? <h4>Status: {status}</h4> : null}
            {type ? <h4>Type: {type}</h4> : null}
          </div>
        )}
        <br />
      </div>
    </div>
  );
};
export default CharactersMoreDetails;
