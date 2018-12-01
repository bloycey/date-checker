(function() {

    let hours;
    let dueDate;
    let numDaysRaw;
    let numDaysNoWeekends;
    let hoursPerDay;

    const domTime = document.querySelector(".time-input");
    const domDate = document.querySelector(".date-input");
    const domTotal = document.querySelector("#total");

    const todaysDate = new Date();
    const differenceInCalendarDays = dateFns.differenceInCalendarDays;
    const eachDay = dateFns.eachDay;
    const isWeekend = dateFns.isWeekend;


    domTime.addEventListener("keyup", () => {
        unpdateFields()
    })

    domDate.addEventListener("change", () => {
        updateFields();
    })

    function updateFields() {
        hours = domTime.value;
        dueDate = domDate.value;
        if(hours !== undefined && dueDate !== undefined) {
            calculateTime(dueDate, todaysDate, hours);
            domTotal.innerHTML = hoursPerDay.toFixed(1);
        }
    }

    function calculateTime(endDate, startDate, numHours) {
        const allDays = eachDay(startDate, endDate);
        numDaysRaw = allDays.length;
        const noWeekends = allDays.filter(function(date){
            return isWeekend(date) == false
        });
        numDaysNoWeekends = noWeekends.length;
        hoursPerDay = hours / numDaysNoWeekends;
    }

})();