import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100%',
  },
});

export default function DataTable({ data, columnLabels }) {
  const classes = useStyles();
  console.log(data);
  const showInReverseOrder = [...data].reverse();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columnLabels.map(column => (
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
            {showInReverseOrder.map(d => {
              return (
                <TableRow key={`row${d}`}>
                  {d.map(d => (
                    <TableCell key={`cell${d}`}>{d}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
