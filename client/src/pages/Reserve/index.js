import React, { useState, useEffect } from 'react';
import DateTimePicker from '../../components/DateTimePicker';

function Reserve(props) {

  const entity = props.location.entity;
  const business_name = props.location.business;

  console.log(entity);
  console.log(business_name);

  try {

    return (
      <div>
      <div>{business_name}</div>
      <div>Reserve {entity.business_entity_name}</div>
      <form>

        <div>Start Time: </div>
        <DateTimePicker id="startTime"/>

        <div>End Time: </div>
        <DateTimePicker id="endTime"/>

        <button onClick={
             async e => {
               e.preventDefault();
               const formData = {
                  reserved_entity_id: entity.id,
                  // TODO: change this to the logged in user id
                  user_id: 1,
                  time_start: document.querySelector('#startTime').value,
                  time_end: document.querySelector('#endTime').value,
                  status: 'reserved'
               }

               fetch(`/api/business/0/business_entity/${entity.id}/reserve`, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(formData)
               })
                .then(response => response.json())
                .then(data => console.log(data))

            }
        }
        >Reserve</button>
      </form>
      </div>
    )


  } catch (e) {
    console.log(e);
    // return (
    //   <div>
    //     <h2>Something went wrong!</h2>
    //     <h4>Please go back and try again</h4>
    //   </div>
    // )

  }


}


export default Reserve;
