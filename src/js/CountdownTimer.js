export default class CountdownTimer {
    constructor({ rootSelector, daysAtribute, hoursAtribute, minsAtribute, secsAtribute, targetDate }) {
        this.intervalId = null;
        this.rootSelector = rootSelector;
        this.daysAtribute = daysAtribute;
        this.hoursAtribute = hoursAtribute;
        this.minsAtribute = minsAtribute;
        this.secsAtribute = secsAtribute;
        this.targetDate = targetDate;
        this.start();
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateClockface(time);
        }, 1000);
        
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClockface({ days, hours, mins, secs }) {
        const root = document.querySelector(this.rootSelector);
        root.querySelector(this.daysAtribute).textContent = `${days}`;
        root.querySelector(this.hoursAtribute).textContent = `${hours}`;
        root.querySelector( this.minsAtribute).textContent = `${mins}`;
        root.querySelector(this.secsAtribute).textContent = `${secs}`;
    }
}