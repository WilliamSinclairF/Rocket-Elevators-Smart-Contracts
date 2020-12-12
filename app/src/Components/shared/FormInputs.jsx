import React, { useState } from 'react';
import {
  Button,
  FormGroup,
  makeStyles,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Checkbox,
  FormControlLabel,
  Container,
} from '@material-ui/core';

import SelectElement from './SelectElement';

const useStyles = makeStyles({
  Box: {
    margin: '2vh 2vh 0vh 0vh',
  },
  Container: {
    margin: '2vh 2vh 0vh 0vh',
  },
  Form: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function FormInputs({
  inputs,
  inputLabels,
  selectLabel,
  title,
  data,
}) {
  const classes = useStyles();
  const initialState = { ...inputs.state };
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
    handleReset();
  };

  const handleReset = () => {
    const inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => (input.value = ''));
    setInputState({});
  };

  return (
    <Container className={classes.Container}>
      <Container maxWidth={'sm'}>
        <Typography variant={'h5'} align={'center'}>
          {title}
        </Typography>

        <FormGroup className={classes.Form}>
          {inputs.inputs.map((input, index) => {
            if (inputs.inputTypes[index] === 'checkbox') {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleChange}
                      checked={inputState[`${input.name}`]}
                      name={input.name}
                    />
                  }
                  label={inputLabels[index]}
                  labelPlacement={'top'}
                />
              );
            } else if (input.name === '_id') {
              return (
                <SelectElement
                  data={data}
                  handleChange={handleChange}
                  state={inputState._id}
                  selectLabel={selectLabel}
                />
              );
            } else {
              return (
                <FormControl>
                  <InputLabel>{inputLabels[index]}</InputLabel>
                  <Input
                    required={true}
                    size='medium'
                    onChange={handleChange}
                    value={inputState[`${input.name}`]}
                    name={input.name}
                    type={inputs.inputTypes[index]}
                    key={input.name}
                  />
                </FormControl>
              );
            }
          })}

          <Button
            size='medium'
            variant='contained'
            color='primary'
            onClick={handleDrizzleSubmit}>
            Add Record
          </Button>
        </FormGroup>
      </Container>
    </Container>
  );
}
