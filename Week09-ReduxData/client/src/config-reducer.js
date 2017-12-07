import getConfig from './get-config';
const state = getConfig();

let stateInit = {
    baseDir: "Unknown",
    siteDirs: ["Unknown"],
    bootswatch: "Unknown",
    destinationDirs: ["Unknown"]
};

//which one

//const configReducer = (state = stateInit, action) => {
const configReducer = (state = state, action) => {
    switch (action.type) {
        case 'ALL':
            const user = action.users.calvert;
            return {
                ...user,
                baseDir: user['base-dir'],
                bootswatch: user.bootswatch,
                siteDirs: user['site-dirs'],
                destinationDirs: user['destination-dirs']
            };
        case 'BOOTSWATCH':
            return {
                ...state,
                bootswatch: "foo"
            };
        case 'SITE-DIRS':
            return {
                ...state,
                //not actually
                siteDirs: "ok"
            };
        case 'DESTINATION-DIRS':
            return {
                ...state,
                //not actually
                destinationDirs: "bar"
            };
        default:
        return state;
    }
};

export default configReducer;