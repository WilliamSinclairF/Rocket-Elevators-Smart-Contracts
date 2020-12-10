import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import columns from './tableColumnLabels';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default function QualityTestTable({ buildings }) {
  const classes = useStyles();
  const descOrderTests = [...buildings].reverse();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={'col' + column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {descOrderTests.map(build => {
              return (
                <TableRow key={'row' + build.id}>
                  <TableCell key={'id' + build.id}>
                    {build.id}
                  </TableCell>
                  <TableCell key={'address' + build.id}>
                    {build.buildingAddress}
                  </TableCell>
                  <TableCell key={'permit' + build.id}>
                    {build.operatingPermit}
                  </TableCell>
                  <TableCell key={'cert' + build.id}>
                    {build.conformityCertificate}
                  </TableCell>
                  <TableCell key={'door' + build.id}>
                    {build.elevatorDoorTest}
                  </TableCell>
                  <TableCell key={'cable' + build.id}>
                    {build.elevatorCableTest}
                  </TableCell>
                  <TableCell key={'break' + build.id}>
                    {build.elevatorBreakTest}
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
