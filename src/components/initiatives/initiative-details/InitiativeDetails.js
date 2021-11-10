import React from 'react'

import { Link, useParams } from "react-router-dom"

import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import Title from '../../commons/title/Title'
import ProposalList from '../proposals/proposal-list/ProposalList'

export default function InitiativeDetails() {
    const { initiativeId } = useParams()

    return (
        <Grid item xs={12}>
            <Title><Link to="/dashboard/initiatives">Initiatives</Link> | Initiative Details #{initiativeId}</Title>
            <Paper sx={{ p: 4, display: 'flex', flexDirection: 'row' }}>                
                <ProposalList initiativeId={initiativeId} />
            </Paper>
        </Grid>
    )
}