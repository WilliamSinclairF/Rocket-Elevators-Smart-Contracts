import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import TestTable from './TestTable';

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <>
      <strong>Create Test: </strong>
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='createTest'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
      />
      <strong>Stored Value: </strong>
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='getTests'
        render={tests => <TestTable tests={tests} />}
        utf8
      />
    </>
  );
};
