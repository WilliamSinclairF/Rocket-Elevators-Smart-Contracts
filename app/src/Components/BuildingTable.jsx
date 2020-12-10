import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Box } from '@material-ui/core';

const columns = [
  // {
  //   id: 'id',
  //   label: 'ID',
  //   minWidth: 100
  // },
  {
    id: 'buildingAddress',
    label: 'Building address',
    minWidth: 170
  },
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

export default function BuildingTable({ buildings }) {
  const classes = useStyles();

  return (
    <Box>
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
              {buildings.map(build => {
                return (
                  <TableRow>
                    {/* <TableCell key={'id' + build.id}>
                      {build.id}
                    </TableCell> */}

                    <TableCell key={'address'}>
                      {build.buildingAddress}
                    </TableCell>

                    <TableCell key={'permit'}>
                      {build.operatingPermit}
                    </TableCell>

                    <TableCell key={'cert'}>
                      {build.conformityCertificate}
                    </TableCell>

                    <TableCell key={'door'}>
                      {build.elevatorDoorTest}
                    </TableCell>

                    <TableCell key={'cable'}>
                      {build.elevatorCableTest}
                    </TableCell>

                    <TableCell key={'break'}>
                      {build.elevatorBreakTest}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
