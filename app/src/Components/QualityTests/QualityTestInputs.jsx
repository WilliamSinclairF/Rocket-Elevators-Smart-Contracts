import React, { useState } from 'react';
import SelectElement from '../shared/SelectElement';
import buildings from '../../buildings.json';
import {
  Checkbox,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core';

const buildingIds = buildings.map(b => b.building.id);

export default function TestInputs({ inputs, labels }) {
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
      _id: '',
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
    <>
      <FormGroup>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 order-1">
            <SelectElement
              data={buildingIds}
              handleChange={handleChange}
              state={inputState._id}
            />
          </div>
          {console.log(inputs)}
          {inputs.inputs
            .filter(i => i.internalType !== 'uint256')
            .map((input, index) => {
              return input.internalType === 'bool' ? (
                <div className="col-lg-3 col-md-6 col-12 order-last order-md-2 order-lg-last">
                  <FormControlLabel
                    key={'label' + input.name}
                    control={
                      <Checkbox
                        size='medium'
                        onChange={handleChange}
                        checked={inputState._isComplete}
                        name={input.name}
                        key={input.name}
                      />
                    }
                    label={labels[index]}
                    labelPlacement='bottom'
                  />
                </div>
              ) : (
                <div className="col-lg-3 col-md-4 col-12 order-3">
                  <FormControlLabel
                    key={'label' + input.name}
                    control={
                      <TextField
                        name={input.name}
                        key={input.name}
                        value={inputState[`${input.name}`]}
                        onChange={handleChange}
                      />
                    }
                    label={labels[index]}
                    labelPlacement='bottom'
                  />
                </div>
              );
            })}
        </div>
          <Button
            variant='contained'
            color='primary'
            onClick={handleDrizzleSubmit}>
            Add Record
          </Button>
      </FormGroup>
    </>
  );
}
