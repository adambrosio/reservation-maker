import React, { useState, useEffect } from "react";
import Button from "../../components/Button/index";
import Form from "../../components/Form/index";
import { getUserData } from '../../utils/API'
import Reservation from "../../components/Reservation";
import Entity from "../../components/Entity";

function Business(props) {

  const [businessState, setBusinessState] = useState({});
  const [entitiesState, setEntitiesState] = useState([]);

  useEffect(() => {
    const business = fetch("/api/business/" + props.match.params.id)
      .then(response => response.json())
      .then(data => data);
    const entities = fetch("/api/business/" + props.match.params.id + "/business_entity")
      .then(response => response.json())
      .then(data => data);

    Promise.all([ business, entities ])
      .then(payload => {
        console.log(payload);
        setBusinessState(payload[0]);
        setEntitiesState(payload[1]);
    });

  }, []);


  return (
    <div>
      <h4>{businessState.business_name}</h4>
      <h6>{businessState.category}</h6>
      <h6>{businessState.street}, {businessState.city}</h6>
      <div>{businessState.description}</div>
      {entitiesState.map(entity => <Entity entity={entity} /> )}

    </div>

  );
}

export default Business;
