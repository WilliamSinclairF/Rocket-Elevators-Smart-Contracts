import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import { Typography } from '@material-ui/core';
import FormInputs from '../shared/FormInputs';
import buildings from '../../buildings.json';
import DataTable from '../shared/DataTable';
import columnLabels from './tableColumnLabels';
const { ContractData, ContractForm } = newContextComponents;

const buildingIds = buildings.map(b => b.building.id);

const inputLabels = [
  'ID',
  'Building address',
  'Operating permit',
  'Conformity certificate',
  'Elevator door test',
  'Elevator cable test',
  'Elevator break test',
  'All Secure?',
];

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props

  return (
    <>
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='createQualityTest'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
        render={inputs => (
          <FormInputs
            title={'Add A New Quality Control Record'}
            selectLabel={inputLabels[0]}
            inputs={inputs}
            inputLabels={inputLabels}
            data={buildingIds}
          />
        )}
      />
      <hr />

      <Typography variant={'h5'} align={'center'}>
        Records
      </Typography>

      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='getBuildings'
        utf8
        render={buildings => {
          return <DataTable columnLabels={columnLabels} data={buildings} />;
        }}
      />
    </>
  );
};
