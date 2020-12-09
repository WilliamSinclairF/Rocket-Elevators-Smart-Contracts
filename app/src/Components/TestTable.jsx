import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'ID', label: 'ID', minWidth: 100 },
  { id: 'buildingAddress', label: 'Building address', minWidth: 170 },
  {
    id: 'operatingPermit',
    label: 'Operating permit',
    minWidth: 100,
  },
  {
    id: 'conformityCertificate',
    label: 'Conformity certificate',
    minWidth: 100,
  },
  {
    id: 'elevatorDoorTest',
    label: 'Elevator door test',
    minWidth: 100,
  },
  {
    id: 'elevatorCableTest',
    label: 'Elevator cable test',
    minWidth: 100,
  },
  {
    id: 'elevatorBreakTest',
    label: 'Elevator break test',
    minWidth: 100,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default function TestTable({ tests }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tests.map(test => {
              return (
                <TableRow key={'row' + test.id}>
                  <TableCell key={'id' + test.id}>{test.id}</TableCell>
                  <TableCell key={'address' + test.id}>
                    {test.buildingAddress}
                  </TableCell>
                  <TableCell key={'permit' + test.id}>
                    {test.operatingPermit}
                  </TableCell>
                  <TableCell key={'cert' + test.id}>
                    {test.conformityCertificate}
                  </TableCell>
                  <TableCell key={'door' + test.id}>
                    {test.elevatorDoorTest}
                  </TableCell>
                  <TableCell key={'cable' + test.id}>
                    {test.elevatorCableTest}
                  </TableCell>
                  <TableCell key={'break' + test.id}>
                    {test.elevatorBreakTest}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}