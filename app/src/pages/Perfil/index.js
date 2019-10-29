import React from 'react';
import ReactLoading from 'react-loading';
import { API_URL, USER_URL} from '../../constants';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './index.scss';

export default class Perfil extends React.Component {
    state = {
        user: false,
        loading: false,
        repos: []
    }
    componentDidMount() {
        const {match : {params : { username }}} = this.props;
        this.setState({
            user: false,
            loading: true,
        })
        axios
        .get(API_URL + USER_URL + username)
        .then( data => data.status === 200 && data.data)
        .then( user => {
            
            this.setState({
                user
            });
            axios
                .get(user.repos_url)
                .then( data => data.status === 200 && data.data)
                .then( repos => this.setState({repos, loading: false}));
        });
    }
    render() {
        let { loading, user, repos } = this.state;
        return (<div className="page--perfil">
            {loading && !user && <Grid container justify="center">
                <Grid item xs={4}>
                    <ReactLoading type='balls' color='#3f51b5' />
                </Grid>
            </Grid>}
            {user && <Grid container justify="center">
                <Grid item xs={3}>
                    <img src={user.avatar_url} alt={user.id} />
                    <ul className="user--info">
                        <li>Blog: {user.blog}</li>
                        <li>Compant: {user.company}</li>
                        <li>Followers: {user.followers}</li>
                        <li>following: {user.following}</li>
                    </ul>
                </Grid>
                <Grid item xs={9}>
                    <Grid container>
                        {loading && !repos && <ReactLoading type='balls' color='#3f51b5' />}
                        {repos.map ( repo => <Grid item key={repo.id} xs={4} className="repo--user">
                            <Card>
                                <CardContent>
                                    <a href={repo.url}>{repo.name}</a>
                                </CardContent>
                            </Card>
                        </Grid>)}
                    </Grid>
                </Grid>
            </Grid>}
        </div>);
    }
}