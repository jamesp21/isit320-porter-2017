/************************************
 * Setup
 ************************************/

function elfFireStart() {
    $('#elfDatabasePush').click(elfFireDataPush);
    $('#elfDatabaseGet').click(elfFireDataGet);
    $('#elfDatabaseGetAllQux').click(elfFireDatabaseGetAllQux);
    $('#elfShowCurrentUser').click(elfFireShowCurrentUser);
    $('#elfInput').click(elfFireDynamicPush);
    $('#elfInsertFromFile').click(insertPresidentsFromFile);
    $('#elfUpdatePresident').click(updatePresident);
    $('#elfPushPresident').click(pushPresident);
    $('#elfGetPresidents').click(getPresidents);
    elfFireDynamicData();
}

/************************************
 * Users
 ************************************/

function elfFireShowCurrentUser() {
    const user = firebase.auth().currentUser;
    let userName;
    let userEmail;
    let userPhotoUrl;
    let userId;

    if (user !== null) {
        userName = user.displayName;
        userEmail = user.email;
        userPhotoUrl = user.photoURL;
        userId = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    $('#userName').html(userName);
    $('#userEmail').html(userEmail);
    $('#userPhotoUrl').html(userPhotoUrl);
    $('#userId').html(userId);
    $('#userImg').attr('src', userPhotoUrl);
}

/************************************
 * Database
 ************************************/

let elfOldInput = [];

function elfFireDataGet() {
    return firebase.database().ref('/bar/foo').once('value').then(function(snapshot) {
        const userName = snapshot.val();
        console.log(userName);
    });
}

function elfFireDatabaseGetAllQux() {
    const list = $('#userInputList');
    return firebase.database().ref('/bar/qux').once('value').then(function(snapshot) {
        const quxData = snapshot.val();
        console.log(quxData);
        list.empty();
        for (let i = 0; i < quxData.oldInput.length; i++) {
            console.log(quxData.oldInput[i]);
            list.append('<li>' + quxData.oldInput[i] + '</li>');
        }
    });
}

function elfFireDynamicData() {
    const list = $('#userInputList');
    const barQuxRef = firebase.database().ref('bar/qux');
    barQuxRef.on('value', function(snapshot) {
        const userVal = snapshot.val();
        console.log(userVal);
        if (userVal) {
            list.append('<li>' + userVal.userInput + '</li>');
            elfOldInput = userVal.oldInput;
        }
    });
}

function elfFireDynamicPush() {

    function writeUserData() {
        let userInput = $('#userInput').val();
        if (userInput === '') {
            userInput = 'No input from user.';
        }

        if (!Array.isArray(elfOldInput)) {
            elfOldInput = [];
        }
        elfOldInput.push(userInput);
        firebase.database().ref('bar/qux').set({
            userInput: userInput,
            oldInput: elfOldInput
        });
    }

    writeUserData();
}

function elfFireDataPush() {

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('bar/foo').set({
            foo: 'foobar'
        });
    }

    function dataInsert() {
        firebase.database().ref('presidents').set({
            'first': 'Jack',
            'last': 'Sparrow'
        });
    }

    // writeUserData();
    dataInsert();
}


/*******************************************
 * Presidents Database
 *******************************************/

function insertPresidentsFromFile() {
    $.getJSON('users.json', function(users) {
        firebase.database().ref('presidents').set(
            users
        );
    });
}

function updatePresident() {
    const adaNameRef = firebase.database().ref('presidents/0');
    adaNameRef.update({
        first: 'Ada'
    });
}

function pushPresident() {
    const first = $('#elfFirstName').val();
    const last = $('#elfLastName').val();
    const presidentRef = firebase.database().ref('presidents');
    const newPresidentRecord = presidentRef.push();
    newPresidentRecord.set({"first": first , "last": last});
}

function getPresidents() {
    const list = $('#presidentsList');
    return firebase.database().ref('/presidents').once('value').then(function(snapshot) {
        const presidents = snapshot.val();
        console.log(presidents);
        list.empty();
        for (const president in presidents) {
            console.log(presidents[president]);
            list.append('<li>' + presidents[president].first + ' ' + presidents[president].last + '</li>');
        }
    });
}

$(document).ready(function() {
    'use strict';
    elfFireStart();
});
