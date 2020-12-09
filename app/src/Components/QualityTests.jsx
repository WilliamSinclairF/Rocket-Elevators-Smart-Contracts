import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import BuildingTable from './BuildingTable';

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <>
      <strong>Create Quality Test: </strong>
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='createQualityTest'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
      />
      <strong>Stored Value: </strong>
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='getBuildings'
        render={buildings => <BuildingTable buildings={buildings} />}
        utf8
      />
    </>
  );
};
