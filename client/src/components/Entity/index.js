import React from "react";

function Entity(props) {

  const { entity } = props;

  console.log('entity');
  console.log(entity);

  return (
    <div>
      {entity.business_entity_name}
      <div>{entity.description}</div>
    </div>
  );
}

export default Entity;
