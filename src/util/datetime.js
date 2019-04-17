let moment = require('moment');

// YYYY-MM-DD HH:MM:SS
let CurrentUSDateTime = () => {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    return date + ' ' + time
};

// DD-MM-YYYY HH:MM:SS
let CurrentDateTime = () => {
    /*let today = new Date()
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    return date + ' ' + time*/
    return moment().format("YYYY-MM-DD HH:mm:ss")
};

// DD-MM-YYYY HH:MM:SS
let CurrentDate = () => {
    let today = new Date();
    return today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
};

// YYYY-MM-DD
let CurrentUSDate = () => {
    let today = new Date();
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
};

function formatISOString(rawDateTime){
    return new Date(rawDateTime).toISOString()
}

function formatDate(rawDate) {
    //rawDate = new Date(rawDate).toISOString();
    return moment(rawDate).format("YYYY-MM-DD");
}

function formatDateTime(rawDateTime) {
    //rawDateTime = new Date(rawDateTime).toISOString();
    return moment(rawDateTime).format("DD-MM-YYYY HH:mm:ss");
}

function formatUSDateTime(rawDateTime) {
    //rawDateTime = new Date(rawDateTime).toISOString();
    return moment(rawDateTime).format("YYYY-MM-DD HH:mm:ss");
}

function delimitTimeWithHyphens(rawDateTime) {
    return rawDateTime.replace(/:/gi, "-");
}

function fullDateTime(rawDateTime){
    //rawDateTime = new Date(rawDateTime).toISOString();
    return moment(rawDateTime).format("Do MMM YYYY HH:mm:ss");
}

function fullDate(rawDate){
    //rawDateTime = new Date(rawDateTime).toISOString();
    return moment(rawDate).format("Do MMM YYYY");
}

export default {
    CurrentUSDateTime,
    CurrentDateTime,
    CurrentDate,
    CurrentUSDate,
    formatDate,
    formatUSDateTime,
    formatDateTime,
    fullDateTime,
    fullDate,
    delimitTimeWithHyphens,
}
