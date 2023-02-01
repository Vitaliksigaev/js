// const github = require('./github');

// const username = process.argv[2];

// github.getRepos(username, (error, repos) => {
//   if (error) return console.error(error.message);

//   repos.forEach((repo) => console.log(repo.name));
// });


const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor(total, interval) {
        super();
        this.total = total;
        this.interval = interval;
        this.ticks = 0;
    }

    _tick() {
        this.ticks += 1;
        if (this.ticks <= this.total) {
            this.emit('tick', this.ticks)
        } else {
            this.end();
        }
    }

    start() {
        this.intervalId = setInterval(() => this._tick(), this.interval);
        this.emit('start');
    }

    end() {
        clearInterval(this.intervalId);
        this.emit('end');
    }
}

// таймер на 10 срабатываний с интервалом 500 мс
const timer = new Timer(10, 500);

timer.once('start', () => console.log('Start'));
timer.on('tick', tick => console.log(tick));
timer.once('end', () => console.log('End'));

timer.start();
