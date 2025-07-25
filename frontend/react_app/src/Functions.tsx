export function getTimeString(numDays: number, numHours: number, numMinutes: number, numSeconds: number) {
    let time = "";

    let days = numDays + " days";
    let hours = numHours + " hours";
    let minutes = numMinutes + " minutes";
    let seconds = numSeconds + " seconds";

    if(numDays == 1)
    {
        days = numDays + " day";
    }

    if(numHours == 1)
    {
        hours = numHours + " hour";
    }

    if(numMinutes == 1)
    {
        minutes = numMinutes + " minute";
    }

    if(numSeconds == 1)
    {
        seconds = numSeconds + " second";
    }

    if(numDays > 0)
    {
        if(numHours > 0)
        {
            time = days + " and " + hours;
        }
        else
        {
            time = days;
        }
    }
    else if(numHours > 0)
    {
        if(numMinutes > 0)
        {
            time = hours + " and " + minutes;
        }
        else
        {
            time = hours;
        }
    }
    else if(numMinutes > 0)
    {
        if(numSeconds > 0)
        {
            time = minutes + " and " + seconds;
        }
        else
        {
            time = minutes;
        }
    }
    else
    {
        time = seconds;
    }

    return time;
}

export function getDateString(day: number, month: number, year: number) {
    let dayString = "";

    switch(day%10) {
        case 1: {
            dayString = day + "st";
            break;
        }
        case 2: {
            dayString = day + "nd";
            break;
        }
        default: {
            dayString = day + "th";
            break;
        }
    }

    let monthString = "";

    switch(month) {
        case 2: {
            monthString = "February";
            break;
        }
        case 3: {
            monthString = "March";
            break;
        }
        case 4: {
            monthString = "April";
            break;
        }
        case 5: {
            monthString = "May";
            break;
        }
        case 6: {
            monthString = "June";
            break;
        }
        case 7: {
            monthString = "July";
            break;
        }
        case 8: {
            monthString = "August";
            break;
        }
        case 9: {
            monthString = "September";
            break;
        }
        case 10: {
            monthString = "October";
            break;
        }
        case 11: {
            monthString = "November";
            break;
        }
        case 12: {
            monthString = "December";
            break;
        }
        default: {
            monthString = "January";
            break;
        }
    }

    return monthString + " " + dayString + ", " + year;
}