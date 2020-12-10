import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import BuildingTable from './BuildingTable';
import { Container, Typography, Box } from '@material-ui/core';
import QualityTestInputs from './QualityTestInputs';

const { ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <Container>
      <Box>
        <Typography variant={'h5'} align={'center'}>
          New Quality Control Record
        </Typography>
      </Box>
      <hr />
      <ContractForm
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='createQualityTest'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
        render={inputs => (
          <QualityTestInputs
            inputs = {inputs}
            labels = {[
              // 'Id',
              'Building address',
              'Operating permit',
              'Conformity certificate',
              'Elevator door test',
              'Elevator cable test',
              'Elevator break test',
              'Has test passed'
            ]}
          />
        )}
      />
      <Box>
        <Typography variant={'h5'} align={'center'}>
          Records
        </Typography>
      </Box>
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='getBuildings'
        render={buildings => <BuildingTable buildings={buildings} />}
        utf8
      />
    </Container>
  );
};
