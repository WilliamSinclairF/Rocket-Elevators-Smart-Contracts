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
    minWidth: 170,
  },
  {
    id: 'operatingPermit',
    label: 'Operating permit',
    minWidth: 170,
  },
  {
    id: 'conformityCertificate',
    label: 'Conformity certificate',
    minWidth: 170,
  },
  {
    id: 'elevatorDoorTest',
    label: 'Elevator door test',
    minWidth: 170,
  },
  {
    id: 'elevatorCableTest',
    label: 'Elevator cable test',
    minWidth: 170,
  },
  {
    id: 'elevatorBreakTest',
    label: 'Elevator break test',
    minWidth: 170,
  },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TestTable({ tests }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            {tests
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(test => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={test.id}>
                    {columns.map(column => {
                      return (
                        <>
                          <TableCell key={column.id} align={column.align}>
                            {test.id}
                          </TableCell>
                          <TableCell key={column.id} align={column.align}>
                            {test.buildingAddress}
                          </TableCell>
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={tests.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
