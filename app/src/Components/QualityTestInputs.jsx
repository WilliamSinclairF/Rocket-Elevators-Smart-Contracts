import React, { useState } from 'react';
import {
  Checkbox,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Container,
} from '@material-ui/core';

export default function QualityTestInputs({ inputs, labels }) {
  const initialState = { ...inputs.state, _isComplete: false };
  const [inputState, setInputState] = useState(initialState);
  const { handleInputChange, handleSubmit } = inputs;

  const handleChange = e => {
    handleInputChange(e);
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setInputState({
      ...inputState,
      [target.name]: value,
    });
  };

  const handleDrizzleSubmit = e => {
    handleSubmit(e);
    setInputState({
      // _id: '',
      _buildingAddress: '',
      _conformityCertificate: '',
      _elevatorBreakTest: '',
      _elevatorCableTest: '',
      _elevatorDoorTest: '',
      _operatingPermit: '',
      _isComplete: false,
    });
  };

  return (
    <Container>
      <FormGroup>
        {inputs.inputs.map((input, index) => {
          return input.internalType === 'bool' ? (
            <FormControlLabel
              key={'label' + input.name}
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={inputState._isComplete}
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