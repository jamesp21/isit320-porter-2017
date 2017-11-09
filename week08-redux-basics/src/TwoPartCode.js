import {connect} from 'react-redux';
import TwoPartJsx from './TwoPartJsx';

const mapStateToProps = (state) => {
    return {
        statement: state.statement,
        kind: state.kind
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deny: () => {
            dispatch({type: 'DENY'})
        },
        verify: () => {
            dispatch({type: 'VERIFY'})
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'})
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TwoPartJsx);