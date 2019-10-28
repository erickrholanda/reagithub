import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUsername, setUsers, setUserLoading } from '../../actions';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { API_URL, SEARCH_URL} from '../../constants';

const SearchBox = (props) => {
    const { username, setUsername, setUsers, setUserLoading } = props;
    const searchUsers = () => {
        setUserLoading(true);
        axios
            .get(`${API_URL}${SEARCH_URL}?q=${username}&per_page=40`)
            .then( data => data.status === 200 && data.data)
            .then(data => {
                console.log(data);
                setUsers(data.items);
                setUserLoading(false);
            });
    }
    const onSubmitForm =  event=> {
        event.preventDefault();
        searchUsers();
    };
    return (<Grid>
        <Paper>
            <form onSubmit={onSubmitForm}>
                <InputBase
                    className={'input'}
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Buscar usuário"
                    inputProps={{ 'aria-label': 'Buscar usuário' }}
                    />
                <IconButton className={'iconButton'} aria-label="search" onClick={searchUsers}>
                    <SearchIcon/>
                </IconButton>
            </form>
        </Paper>
      </Grid>);
}
const mapStateToProps = store => ({
    username: store.users.username
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ setUserLoading, setUsername, setUsers }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);