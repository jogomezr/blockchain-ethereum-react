import React, { useState } from 'react'

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import AssignmentIcon from '@mui/icons-material/Assignment'

import ListItemLink from '../../commons/list-item-link/ListItemLink'

export default function BarItems() {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <React.Fragment>
            <List>
                <ListItemLink to="initiatives" primary="Initiatives" icon={<DashboardIcon />} index={0} selectedIndex={selectedIndex} onClick={setSelectedIndex}/>
                <ListItemLink to="customers" primary="Customers" icon={<PeopleIcon />}  index={1} selectedIndex={selectedIndex} onClick={setSelectedIndex}/>
                <ListItem button selected={selectedIndex === 2}>
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListSubheader inset>Saved reports</ListSubheader>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Current month" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Last quarter" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Year-end sale" />
                </ListItem>
            </List>
        </React.Fragment>
    )
}