/*
write a function that converts user entered date formatted as M/D/YYYY to a format required by an API(YYYYMMDD).
The parameter "userDate" and the return value are strings.

For example, it should conver user entered date "12/31/2014" to "20141231" suitable for the API.
 */


function formatDate(userDate) {

    let cutDate = userDate.split('/');
    let year = cutDate[2];
    let month = (0 + cutDate[0]).slice(-2);
    let day = (0 + cutDate[1]).slice(-2);
    return year + month + day;

}

console.log(formatDate("12/11/2014"));
