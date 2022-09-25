import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

export default function ListMatch() {
    return (
        <Box
            sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}
        >
            <Typography variant="h1" gutterBottom>
                Matchs à venir
            </Typography>
            <nav aria-label="main mailbox folders">
                <List>
                    <ListItem>
                        <ListItemText primary="League of Legends" />
                    </ListItem>
                    <ListItem>
                        <List>
                            <ListItem>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="CSGO" />
                    </ListItem>
                    <ListItem>
                        <List>
                            <ListItem>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Outbox" />
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}
