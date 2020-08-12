import React, { useState, useEffect } from "react";
import Button from "../components/Button/index";
import Form from "../components/Form/index";
import { getUserData } from '../utils/API'
import Reservation from "../components/Reservation";

function Profile() {

  const [userState, setUserState] = useState({});
  const [userReservationsState, setUserReservationsState] = useState({});
  // only exists to stop an infinite loop with useEffect
  const [stopIt, setStopIt] = useState(true);

  useEffect(() => {

    fetch("/api/user")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUserState(data);
    });

    fetch("api/userReservations")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUserReservationsState(data);
    });

  }, [stopIt]);


  return (
    <div>
    <h4>{userState.username}</h4>
    <h6>Your Reservations:</h6>
    </div>

  );
}

export default Profile;
// {userState.reservations.map( reservation => <Reservation /> )}
