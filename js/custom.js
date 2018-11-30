$(document).ready(function(){

    let hours;
    let dueDate;
    let numDaysRaw;
    let numDaysNoWeekends;

    const todaysDate = new Date();
    const differenceInCalendarDays = dateFns.differenceInCalendarDays;
    const eachDay = dateFns.eachDay;
    const isWeekend = dateFns.isWeekend;

    
    $('.time-input').on("change", function(){
        hours = $(this).val();
        console.log(`hours ${hours}`);
    })

    $('.date-input').on("change", function(){
        dueDate = $(this).val();
        calculateTime(dueDate, todaysDate);
    })

    function calculateTime(endDate, startDate) {
        const allDays = eachDay(startDate, endDate);
        numDaysRaw = allDays.length;
        const noWeekends = allDays.filter(function(date){
            return isWeekend(date) == false
        });
        numDaysNoWeekends = noWeekends.length;
        console.log(numDaysRaw);
        console.log(numDaysNoWeekends);
    }

})