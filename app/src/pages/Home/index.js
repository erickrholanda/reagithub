import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import SearchBox from '../../components/SearchBox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CardUserList from '../../components/CardUserList';

class Home extends React.Component {
    state = {
        repos: []
    };
    render() {
        return (<div>
            <Box my={2}>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <SearchBox setSearch={items => this.setState({
                            repos: items
                        })} />
                    </Grid>
                </Grid>
            </Box>
            {this.props.loading && <Grid container justify="center">
                <Grid item xs={4}>
                    <ReactLoading type='balls' color='#3f51b5' />
                </Grid>
            </Grid>}
            {this.props.users.length > 0 && <CardUserList users={this.props.users} />}
        </div>);
    }
}
const mapStateToProps = store => ({
    users: store.users.data,
    loading: store.users.loading,
})
export default connect(mapStateToProps)(Home);