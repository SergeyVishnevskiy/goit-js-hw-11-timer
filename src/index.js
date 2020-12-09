import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.daysRef = this.timer.querySelector('[data-value="days"]');
    this.hoursRef = this.timer.querySelector('[data-value="hours"]');
    this.minsRef = this.timer.querySelector('[data-value="mins"]');
    this.secsRef = this.timer.querySelector('[data-value="secs"]');
    this.targetDate = targetDate;
  }

  getTimeRemaining(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.daysRef.textContent = `${days}`;
    this.hoursRef.textContent = `${hours}`;
    this.minsRef.textContent = `${mins}`;
    this.secsRef.textContent = `${secs}`;
  }

  setTimer = setInterval(() => {
    const currentDate = new Date();
    const time = Date.parse(this.targetDate) - Date.parse(currentDate);

    this.endOfTime(time);

    this.getTimeRemaining(time);
  }, 1000);

  pad(value) {
    return String(value).padStart(2, '0');
  }

  endOfTime(time) {
    if (time < 0) {
      clearInterval(this.setTimer);
      this.timer.innerHTML = '<p class="text">happy new year!!!</p>';
    }
  }
}

const newTimerOne = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});

const newTimerTwo = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 1, 2022'),
});
