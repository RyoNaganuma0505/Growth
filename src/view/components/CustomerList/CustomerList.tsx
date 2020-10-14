import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { getCustomerList } from '../../../stub/getCustomerList';

/**
 * 顧客の管理をするためのページ
 */
const CustomerList = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">名前</TableCell>
              <TableCell align="left">年次</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getCustomerList().map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{`${row.year}年生`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CustomerList;
