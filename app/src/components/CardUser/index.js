import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import './index.scss';
export default function CardUser(props) {
    const { user } = props;
    const favorite = false;
    return (<Card className="card--user">
            <CardMedia
            style={{
                height: 0,
                paddingTop: '100%', // 16:9
            }}
            image={user.avatar_url}
            title={user.login}
            />
            <CardContent>
                <p className="card--user--name">
                    {favorite && <StarIcon fontSize={12}></StarIcon>}
                    {!favorite && <StarBorderIcon fontSize={12}></StarBorderIcon>}
                    <Link to={`/perfil/${user.login}`}>
                    {user.login}
                    </Link>
                </p>
            </CardContent>
    </Card>)
}
/*
avatar_url: "https://avatars3.githubusercontent.com/u/4954?v=4"
events_url: "https://api.github.com/users/erick/events{/privacy}"
followers_url: "https://api.github.com/users/erick/followers"
following_url: "https://api.github.com/users/erick/following{/other_user}"
gists_url: "https://api.github.com/users/erick/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/erick"
id: 4954
login: "erick"
node_id: "MDQ6VXNlcjQ5NTQ="
organizations_url: "https://api.github.com/users/erick/orgs"
received_events_url: "https://api.github.com/users/erick/received_events"
repos_url: "https://api.github.com/users/erick/repos"
score: 518.9019
site_admin: false
starred_url: "https://api.github.com/users/erick/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/erick/subscriptions"
type: "User"
url: "https://api.github.com/users/erick"
*/