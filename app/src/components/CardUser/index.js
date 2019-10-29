import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import CardContent from '@material-ui/core/CardContent';
// import IconButton from '@material-ui/core/IconButton';
// import CardActionArea from '@material-ui/core/CardActionArea';
import { addFavorite, removeFavorite } from '../../actions';

import './index.scss';
const CardUser = (props) => {
    const { user } = props;
    const favorite = props.favorites.filter( fav => fav.id === user.id).length > 0;
    const onClickAvatar = () => {
        if (favorite) {
            props.removeFavorite(user);
        }
        else {
            props.addFavorite(user);
        }
    }
    return (<Card className="card--user">
                <CardHeader
                avatar={
                <Avatar onClick={onClickAvatar} aria-label="recipe">
                    {favorite && <StarIcon />}
                    {!favorite && <StarBorderIcon />}
                </Avatar>
                }
                action={false}
                title={user.login}
                // subheader="September 14, 2016"
            />
            <Link to={`/perfil/${user.login}`}>
                <CardMedia
                style={{
                    height: 0,
                    paddingTop: '100%', // 16:9
                }}
                image={user.avatar_url}
                title={user.login}
                />
            </Link>
    </Card>)
}
const mapStateToProps = store => ({
    favorites: store.users.favorites
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ addFavorite, removeFavorite }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CardUser);
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