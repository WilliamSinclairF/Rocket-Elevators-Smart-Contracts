import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import { Typography } from '@material-ui/core';
import FormInputs from '../shared/FormInputs';
import DataTable from '../shared/DataTable';
import columnLabels from './tableColumnLabels';

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <>
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='MaterialProvider'
        method='createMaterials'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
        render={inputs => {
          return (
            <FormInputs
              inputs={inputs}
              title={'New Order'}
              inputLabels={[
                'Controllers',
                'Shafts',
                'Doors',
                'Buttons',
                'Displays',
              ]}
            />
          );
        }}
      />

      <hr />

      <Typography variant={'h5'} align={'center'}>
        Records
      </Typography>

      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='MaterialProvider'
        method='showMaterials'
        utf8
        render={data => <DataTable data={data} columnLabels={columnLabels} />}
      />
    </>
  );
};
