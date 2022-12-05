import React from 'react';

const Item = ({image,flight_number,mission_name,launch_year,details}) => {
  var d = new Date(launch_year);
  const date = `${d.getFullYear()}`;
  return (
    <>
    <div className='card'>  
      <img src={image} alt='rocket-image' />
      <div className="info">
        <h1>Flight #{flight_number}: {mission_name} ({date})</h1>
        <p>{details}</p>
      </div>
    </div>
    </>
  )
}

export default Item