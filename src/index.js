import './style.css';
import CountdownTimer from './js/CountdownTimer.js';

const countdownTimer = new CountdownTimer({
    rootSelector: '#timer-1',
    daysAtribute: '[data-value="days"]',
    hoursAtribute: '[data-value="hours"]',
    minsAtribute: '[data-value="mins"]',
    secsAtribute: '[data-value="secs"]',
    targetDate: new Date('Dec 17, 2020'),
});

const countdownTimer2 = new CountdownTimer({
    rootSelector: '#timer-2',
    daysAtribute: '[data-value="days"]',
    hoursAtribute: '[data-value="hours"]',
    minsAtribute: '[data-value="mins"]',
    secsAtribute: '[data-value="secs"]',
    targetDate: new Date('Dec 17, 2021'),
});