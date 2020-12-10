import React, { useState } from 'react';
import {
  Checkbox,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Container,
} from '@material-ui/core';

export default function TestInputs({ inputs, labels }) {
  const initialState = { ...inputs.state, _testPassed: false };
  const [inputState, setInputState] = useState(initialState);
  const { handleInputChange, handleSubmit } = inputs;

  const handleChange = e => {
    handleInputChange(e);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInputState({
      ...inputState,
      [e.target.name]: value,
    });
  };

  const handleDrizzleSubmit = e => {
    handleSubmit(e);
    setInputState({
      _buildingAddress: '',
      _conformityCertificate: '',
      _elevatorBreakTest: '',
      _elevatorCableTest: '',
      _elevatorDoorTest: '',
      _operatingPermit: '',
      _testPassed: false,
    });
  };

  return (
    <Container>
      <FormGroup>
        {inputs.inputs.map((input, index) => {
          return input.internalType === 'bool' ? (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={inputState._testPassed}
                  name={input.name}
                  key={input.name}
                />
              }
              label={labels[index]}
              labelPlacement='top'
            />
          ) : (
            <FormControlLabel
              control={
                <TextField
                  name={input.name}
                  key={input.name}
                  value={inputState[`${input.name}`]}
                  onChange={handleChange}
                />
              }
              label={labels[index]}
              labelPlacement='top'
            />
          );
        })}
        <Button onClick={handleDrizzleSubmit}>Add Record</Button>
      </FormGroup>
    </Container>
  );
}
