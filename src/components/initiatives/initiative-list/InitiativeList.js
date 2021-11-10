import React from 'react'

import { Link as RouterLink } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import Title from '../../commons/title/Title'

// Generate Initiative Data
function createData(id, creationDate, name, description, startDate, endDate, proposals, status) {
  return { id, creationDate, name, description, startDate, endDate, proposals, status };
}

const rows = [
  createData(
    0,
    '10 Nov, 2021',
    'Weekend getaway',
    'Let\'s organize a trip for next weekend',
    '15 Nov, 2021',
    '19 Nov, 2021',
    3,
    'Finished'
  ),
  createData(
    1,
    '16 Nov, 2021',
    'Solidarity concert',
    'Summer Solidary Concerts',
    '6 Dec, 2021',
    '31 Dec, 2021',
    4,
    'Pending'
  ),
  createData(
    2,
    '17 Nov, 2021',
    'Painting workshop',
    'This workshop is aimed at the more experienced landscape oil painter',
    '29 Nov, 2021',
    '10 Dec, 2021',
    5,
    'Active'),
  createData(
    3,
    '17 Nov, 2021',
    'Name of a new playground',
    'Selecting a name for the new playground',
    '22 Nov, 2021',
    '17 Dec, 2021',
    3,
    'Pending'
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function InitiativeList() {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Title>Initiatives</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Creation Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>#Proposals</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.creationDate}</TableCell>
                <TableCell><RouterLink to={`${row.id}`}>{row.name}</RouterLink></TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.startDate}</TableCell>
                <TableCell>{row.endDate}</TableCell>
                <TableCell>{row.proposals}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more initiatives
        </Link>
      </Paper>
    </Grid>
  );
}