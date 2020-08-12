import React from "react";

function Reservation(props) {

  const { reservation, entity, business } = props;

  console.log(reservation);
  console.log(entity);
  console.log(business);

  return (
    <div>
    <div>
      You reserved {entity.business_entity_name} at {business.business_name} located on {business.street} in {business.city}.
    </div>
    <div>
      <div>Start: {reservation.time_start}</div>
      <div>End: {reservation.time_end}</div>
    </div>
    </div>
  );
}

export default Reservation;
