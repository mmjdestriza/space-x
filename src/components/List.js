import axios from "axios";
import {useState, useEffect} from "react";
import Item from "./Item";
import Loading from "../img/loading.gif";

const List = () => {
  const [launches, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(()=>{
    setLoading(true);
    fetchData();
    setLoading(false);
  })

  const fetchData = async () =>{
    const {data} = await axios.get("https://api.spacexdata.com/v4/launches/");
    setData(data);
  }
  return (
    <div className="container">
        {launches?.map(launch=>(
            <Item 
            image = {launch.links.flickr.original}
            flight_number = {launch.flight_number}
            mission_name = {launch.name}
            launch_year = {launch.date_utc}
            details = {launch.details}
            />
        ))}
        
        <div>{!loading && <p>No more data to be fetched</p>}</div>
    </div>
  )
}

export default List