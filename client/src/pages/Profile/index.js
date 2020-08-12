import React, { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import Form from "../../components/Form/index";
import { getUserData } from '../../utils/API'
import Reservation from "../../components/Reservation";

function Profile() {

  const [userState, setUserState] = useState({});
  const [userReservationsState, setUserReservationsState] = useState([]);

  useEffect(() => {
      const user = fetch("/api/user")
         .then(response => response.json())
         .then(data => data);
      const userReservations = fetch("api/userReservations")
         .then(response => response.json())
         .then(data => data);
      Promise.all([ user, userReservations ])
            .then(payload => {
               setUserState(payload[0]);
               setUserReservationsState(payload[1]);
             });
    }, []);

  return (
    <div>
    <h4>{userState.username}</h4>
    <h6>Your Reservations:</h6>
    {userReservationsState.map( reservation => <Reservation key={reservation.reservation.id} reservation={reservation.reservation} entity={reservation.entity} business={reservation.business}/> )}

    </div>

  );
}

export default Profile;
