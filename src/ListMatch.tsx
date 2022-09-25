import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Component } from 'react'
import data from './data/comingMatches.json'
import type { GameType, LeagueType, MatchType } from './types'

class Bet extends Component<{ team: string; cote: number }> {
    render() {
        return (
            <Button variant='outlined'>
                <Box>
                    <Typography>Victoire {this.props.team}</Typography>
                    <Typography>Cote : {this.props.cote}</Typography>
                </Box>
            </Button>
        )
    }
}

class Match extends Component<{ match: MatchType }> {
    render() {
        return (
            <>
                <ListItemText primary={this.props.match.teamA + ' vs ' + this.props.match.teamB} />
                <Bet team={this.props.match.teamA} cote={this.props.match.coteA} />
                <Bet team={this.props.match.teamB} cote={this.props.match.coteB} />
            </>
        )
    }
}

class Matches extends Component<{
    matches: MatchType[]
}> {
    render() {
        return (
            <List>
                {this.props.matches.map((match) => (
                    <ListItem key={match.id}>
                        <Match match={match} />
                    </ListItem>
                ))}
            </List>
        )
    }
}

class Leagues extends Component<{
    leagues: LeagueType[]
}> {
    render() {
        return (
            <List>
                {this.props.leagues.map((league) => (
                    <>
                        <ListItem>
                            <ListItemText primary={league.name} />
                        </ListItem>
                        <ListItem>
                            <Matches matches={league.matches} />
                        </ListItem>
                    </>
                ))}
            </List>
        )
    }
}

export default class ListMatch extends Component {
    render() {
        const games: GameType[] = data.games

        return (
            <Box
                sx={{
                    width: '100%',
                    maxWidth: 1000,
                    bgcolor: 'background.paper',
                }}
            >
                <Typography variant='h1' gutterBottom>
                    Matchs à venir
                </Typography>
                <List>
                    {games.map((game) => (
                        <>
                            <ListItem>
                                <ListItemText primary={game.name} />
                            </ListItem>
                            <ListItem>
                                <Leagues leagues={game.leagues} />
                            </ListItem>
                        </>
                    ))}
                </List>
            </Box>
        )
    }
}
