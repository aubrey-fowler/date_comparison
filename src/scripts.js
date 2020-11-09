/* dayOfWeek  as 1 - 7 Mon - Sun */
function getNextDayOfWeek(date, dayOfWeek) {
    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));

    resultDate.setHours(20, 0, 0, 0);

    return resultDate;
}

/*  input is a string or date object
    output is a date object */
function findNextValidDraw(currentDate) {
    var _currentDate = currentDate == null ? new Date() : new Date(currentDate);

    var nextWednesday = getNextDayOfWeek(_currentDate, 3);

    var nextSaturday = getNextDayOfWeek(_currentDate, 6);

    var difference_In_Wed = nextWednesday.getTime() - _currentDate.getTime();

    var difference_In_Sat = nextSaturday.getTime() - _currentDate.getTime();

    if (difference_In_Wed < 0 || difference_In_Wed > difference_In_Sat) {
        return nextSaturday;
    }

    return nextWednesday;
}

window.onload = function () {
    var element = document.getElementById('p1');
    element.innerHTML = findNextValidDraw(new Date());
};
