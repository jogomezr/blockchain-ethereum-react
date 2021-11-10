import React from 'react'

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Generate Proposal Data
function createData(id, name, image, votes) {
    return { id, name, image, votes };
}

const rows = [
    createData(
        1,
        'Proposal 1',
        '/images/proposals/painting-workshop-01.jpg',
        7
    ),
    createData(
        2,
        'Proposal 2',
        '/images/proposals/painting-workshop-02.jpeg',
        5
    ),
    createData(
        3,
        'Proposal 3',
        '/images/proposals/painting-workshop-03.jpg',
        6
    ),
    createData(
        4,
        'Proposal 4',
        '/images/proposals/painting-workshop-04.jpg',
        0
    ),
    createData(
        5,
        'Proposal 5',
        '/images/proposals/painting-workshop-05.jpg',
        2
    )
]

export default function ProposalList() {
    return (
        rows.map(row => (
            <Grid item xs={3} key={row.id}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} elevation={3}>
                    <Avatar src={row.image} sx={{ width: 150, height: 150 }} />
                    <ul>
                        <li>ID: {row.id}</li>
                        <li>Name: {row.name}</li>
                        <li># Votes: {row.votes}</li>
                    </ul>
                </Paper>
            </Grid>
        ))
    )
}
