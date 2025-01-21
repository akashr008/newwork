import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const data=[
  {"NAME":"AKASH","Course":"BSC","place":"Kollam"},
  {"NAME":"DRACO","Course":"MSC","place":"Kochi"},
  {"NAME":"MARCO","Course":"BBA","place":"TVM"}
]

const Home = () => {
  return (
    <div>
 <TableContainer >
            <Table style={{border:'SOLID 1PX'}} >
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>COURSE</TableCell>
                        <TableCell>PLACE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.NAME} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.NAME}</TableCell>
              
              <TableCell align="left">{row.Course}</TableCell>
              <TableCell align="left">{row.place}</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Home