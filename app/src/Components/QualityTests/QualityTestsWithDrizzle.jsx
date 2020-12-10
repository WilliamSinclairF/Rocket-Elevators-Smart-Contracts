import React from 'react';
import { newContextComponents } from '@drizzle/react-components';
import QualityTestTable from './QualityTestTable';
import QualityTestInputs from './QualityTestInputs';
import { Container, Typography, Box } from '@material-ui/core';

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
        method='createTest'
        methodArgs={{ from: drizzleState.accounts[0] }}
        sendArgs={{ gas: 6721975 }}
        render={inputs => (
          <QualityTestInputs
            inputs={inputs}
            labels={[
              'Test passed?',
              'Building address',
              'Operating permit',
              'Conformity certificate',
              'Elevator door test',
              'Elevator cable test',
              'Elevator break test',
            ]}
          />
        )}
      />
      <hr />
      <Box>
        <Typography variant={'h5'} align={'center'}>
          Records
        </Typography>
      </Box>
      <ContractData
        drizzle={drizzle}
        drizzleState={drizzleState}
        contract='QualityTest'
        method='getTests'
        utf8
        render={tests => <QualityTestTable tests={tests} />}
      />
    </Container>
  );
};
