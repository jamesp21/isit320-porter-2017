const spokeState = { statement: 'No comment', kind: 'no Comment' };
const spokesman = (state = spokeState, action) => {
    switch (action.type) {
        case 'VERIFY':
            return {
                statement: 'We stand by it. In fact, we invented it.',
                kind: 'verify'
            };
        case 'DENY':
            return {
                statement: 'We deny everything. We have never heard of it.',
                kind: 'deny'
            };
        case 'NO COMMENT':
            return {
                statement: 'No comment.',
                kind: 'no Comment'
            };
        default:
            return state;
    }
};

export default spokesman;