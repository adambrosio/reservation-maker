import React, { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import Form from "../../components/Form/index";
import { getUserData } from '../../utils/API'
import Reservation from "../../components/Reservation";

function Business(props) {

  const [businessState, setBusinessState] = useState({});

  useEffect(() => {
    const business = fetch("/api/business/" + props.match.params.id)
    .then(response => response.json())
    .then(data => data);

    Promise.all([ business ])
    .then(payload => {
      setBusinessState(payload[0]);
    });
  }, []);


  return (
    <div>
      <h4>{businessState.business_name}</h4>
      <h6>{businessState.category}</h6>
      <h6>{businessState.street}, {businessState.city}</h6>
      <div>{businessState.description}</div>

    </div>

  );
}

export default Business;
