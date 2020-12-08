import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;

    this.refs = {
      daysValue: document.querySelector('[data-value="days"]'),
      hoursValue: document.querySelector('[data-value="hours"]'),
      minsValue: document.querySelector('[data-value="mins"]'),
      secsValue: document.querySelector('[data-value="secs"]'),
    };
  }

  getTimeRemaining(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.refs.daysValue.textContent = `${days}`;
    this.refs.hoursValue.textContent = `${hours}`;
    this.refs.minsValue.textContent = `${mins}`;
    this.refs.secsValue.textContent = `${secs}`;
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

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
});
