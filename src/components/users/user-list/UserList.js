import * as React from 'react'

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'

import Title from '../../commons/title/Title';

// Generate Customer Data
function createData(id, name, avatar, account) {
    return { id, name, avatar, account };
}

const rows = [
    createData(
        0,
        'Peter Griffin',
        '/images/peter-griffin.jpg',
        '0x89a3bbdb44cbfb06bda06d8b7ee4dc11317c6a7b'
    ),
    createData(
        1,
        'Lois Griffin',
        '/images/lois-griffin.png',
        '0x297755c2cfec9054fdb18228f0c8a8500e9f4b53'
    ),
    createData(
        2,
        'Stewie Griffin',
        '/images/stewie-griffin.jpg',
        '0xb58eab5e7a29d574ca81bb72025da3f0f863168c'
    ),
    createData(
        3,
        'Meg Griffin',
        '/images/meg-griffin.png',
        '0x8b0a1742efad797f30ac385acbbe0c2c912dde4e'
    ),
    createData(
        4,
        'Chris Griffin',
        '/images/chris-griffin.jpg',
        '0xfeb6acfa6da1c677aab4c992424a0ab9f8066f2e'
    ),
    createData(
        5,
        'Brian Griffin',
        '/images/brian-griffin.jpg',
        '0x600aa65866ef4252b49e2ff2e84cc392aebf69ed'
    ),
    createData(
        6,
        'Quagmire',
        '/images/quagmire.jpg',
        '0xa40018664ef79fcbe44b3af7c7b73b7d44e65e71'
    ),
    createData(
        7,
        'Cleveland',
        '/images/cleveland.jpg',
        '0x785de2eea37ae369cddda5c6503b732a4a752f7c'
    )
];

export default function UserList() {
    return (
        rows.map(row => (
            <Grid item xs={3} key={row.id}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} elevation={3}>
                    <Title>{`ID: ${row.id} - ${row.name}`}</Title>
                    <Avatar alt={row.name} src={row.avatar} sx={{ width: 120, height: 120 }} />
                    <TextField
                        label="Account"
                        id="standard-size-small"
                        size="small"
                        variant="standard"
                        value={row.account}
                    />
                </Paper>
            </Grid>
        ))
    )
}