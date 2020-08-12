import React, { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import Form from "../../components/Form/index";
import { getUserData } from '../../utils/API'
import Reservation from "../../components/Reservation";

function Profile() {

  const [userState, setUserState] = useState({});
  const [userReservationsState, setUserReservationsState] = useState([]);
  // only exists to stop an infinite loop with useEffect
  // const [stopIt, setStopIt] = useState(true);

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

  // useEffect(() => {
  //
  //   fetch("/api/user")
  //   .then(response => response.json())
  //   .then(data => {
  //     // console.log(data);
  //     setUserState(data);
  //   });
  //
  //   fetch("api/userReservations")
  //   .then(response => response.json())
  //   .then(data => {
  //     // console.log(data);
  //     setUserReservationsState(data);
  //     // console.log(userReservationsState);
  //   });
  //
  // }, []);


  return (
    <div>
    <h4>{userState.username}</h4>
    <h6>Your Reservations:</h6>
    {console.log('state')}
    {console.log(userReservationsState)}
    {userReservationsState.map( reservation => <Reservation key={reservation.reservation.id} reservation={reservation.reservation} entity={reservation.entity} business={reservation.business}/> )}

    </div>

  );
}

export default Profile;

// {userReservationsState.forEach( reservationData => <Reservation reservation={reservationData.reservation}  entity={reservationData.entity} business={reservationData.business} />)}
// {userReservationsState.map( reservation => <Reservation reservation={reservation.reservation} entity={reservation.entity} business={reservation.business}/> )}
