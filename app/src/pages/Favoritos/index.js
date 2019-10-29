import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import CardUserList from '../../components/CardUserList';

class Favoritos extends React.Component {
    render() {
        return (<div>
            {this.props.favorites.length > 0 && <React.Fragment>
                <Typography variant="h6">{this.props.favorites.length} favorito{this.props.favorites.length > 1 ? 's':''}.</Typography>
                <CardUserList users={this.props.favorites} />
            </React.Fragment>}
            {this.props.favorites.length === 0 && <Typography variant="h6">Nenhum favorito adcionado.</Typography>}
        </div>);
    }
}
const mapStateTopros = store => ({
    favorites: store.users.favorites
});
export default connect(mapStateTopros, null)(Favoritos);