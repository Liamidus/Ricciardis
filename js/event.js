function getNextWednesday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilWednesday = (3 - dayOfWeek + 7) % 7;

    const nextWednesday = new Date(today);
    nextWednesday.setDate(today.getDate() + daysUntilWednesday);

    return nextWednesday;
}

function getInitialWednesdays() {
    const fixedStartDate = new Date('2024-07-18'); // Set fixed start date (July 17, 2024)
    const nextWednesday = getNextWednesday();
    
    // Determine which date is earlier and set the two initial biweekly Wednesdays accordingly
    const firstWednesday = (nextWednesday < fixedStartDate) ? nextWednesday : fixedStartDate;
    const secondWednesday = new Date(firstWednesday);
    secondWednesday.setDate(firstWednesday.getDate() + 7);

    return [firstWednesday, secondWednesday];
}

function formatDateWithSuffix(date) {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];

    let suffix;
    const day = date.getDate();
    if (day >= 11 && day <= 13) {
        suffix = 'th';
    } else {
        switch (day % 10) {
            case 1: suffix = 'st'; break;
            case 2: suffix = 'nd'; break;
            case 3: suffix = 'rd'; break;
            default: suffix = 'th';
        }
    }

    return day + suffix + ' ' + monthNames[date.getMonth()];
}


const [initialWednesday1, initialWednesday2] = getInitialWednesdays();
const formattedDate1 = formatDateWithSuffix(initialWednesday1);
const formattedDate2 = formatDateWithSuffix(initialWednesday2);

document.getElementById('Bingo_date').innerHTML = `${formattedDate1}`;
document.getElementById('Trivia_date').innerHTML = `${formattedDate2}`;

function swapDivs() {
    const div1 = document.getElementById('Bingo_details');
    const div2 = document.getElementById('Trivia_details');

    // Swap the innerHTML of the two divs
    const temp = div1.innerHTML;
    div1.innerHTML = div2.innerHTML;
    div2.innerHTML = temp;
}
// Function to check if today is Wednesday and swap the divs if true
function checkAndSwap() {
    const today = new Date();
    const dayOfWeek = today.getDay();

    // 3 represents Wednesday (Sunday is 0, Monday is 1, etc.)
    if (dayOfWeek === 3) {
        swapDivs();
    }
}
window.onload = checkAndSwap;