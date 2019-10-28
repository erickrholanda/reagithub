import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardUser from '../CardUser';

export default function CardUserList(props) {
    const { users } = props;

    return ( <Grid container spacing={3}>
        {users.map( (user, key) =><Grid item xs={3} md={3} lg={4} sm={6} key={key}>
            <CardUser user={user} />
        </Grid>)}
   </Grid>);
}