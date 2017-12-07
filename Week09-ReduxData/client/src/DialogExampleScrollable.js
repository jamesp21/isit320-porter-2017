import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import FileFolder from 'material-ui/svg-icons/file/folder';

export default class DialogExampleScrollable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <MuiThemeProvider>
            <div>
                <RaisedButton label={this.props.title} onClick={this.handleOpen} />
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <List>
                        {this.props.dirs.map((dir) => (
                            <ListItem key={dir} primaryText={dir} leftIcon={<FileFolder />} />
                        ))}
                    </List>
                </Dialog>
            </div>
            </MuiThemeProvider>
        );
    }
}