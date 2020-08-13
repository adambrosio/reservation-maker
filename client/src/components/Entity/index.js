import React from "react";
import { Link } from "react-router-dom"

function Entity(props) {

  const { entity, businessName } = props;

  console.log('entity');

  return (
    <div>
      {entity.business_entity_name}
      <div>{entity.description}</div>
      <Link to={{
        pathname: "reserve/" + entity.id,
        entity: entity,
        business: businessName

      }}><button>Reserve Now!</button></Link>
    </div>
  );
}

export default Entity;
