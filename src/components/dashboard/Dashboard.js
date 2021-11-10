import * as React from 'react'

import { Routes, Route } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import AppBar from './app-bar/AppBar'
import InitiativeDetails from "../initiatives/initiative-details/InitiativeDetails"
import InitiativeList from "../initiatives/initiative-list/InitiativeList"
import UserList from "../users/user-list/UserList"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Company
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const mdTheme = createTheme();

function DashboardContent() {
    return (
        <ThemeProvider theme={mdTheme}>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />

                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>

                            <Routes>
                                {/* Initiatives */}                                
                                <Route exact path="initiatives" element={<InitiativeList />} />
                                <Route path="initiatives/:initiativeId" element={<InitiativeDetails />} />
                                {/* Users */}
                                <Route exact path="customers" element={<UserList />} />
                            </Routes>

                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>

                </Box>

            </Box>

        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}