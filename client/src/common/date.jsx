import React from 'react'
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturaday"];

export const getDay = (timestamp) => {
    let date = new Date(timestamp);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

