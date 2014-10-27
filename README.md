scheduled-tasks
=========================

**NOTE: Although, this package works, I recommend using [percolatestudio:synced-cron](https://github.com/percolatestudio/meteor-synced-cron) instead because it supports multiple app instances.**

A Meteor package that provides a simple API for scheduling a function to run on the server. This is a fairly basic wrapper around [laterjs](http://bunkat.github.io/later/) and also exports the `later` variable.

Requires Meteor 0.9.0+

## Installing

In a Meteor app directory:

```bash
$ meteor add aldeed:scheduled-tasks
```

## Using

In server code, assuming `sendHourlyEmails` is a function defined elsewhere:

```js
var schedule = later.parse.recur().on(5).minute(); // on fifth minute of every hour, every day
var hourlyEmailer = new ScheduledTask(schedule, sendHourlyEmails);

Meteor.startup(function () {
  hourlyEmailer.start();
});
```

You can alternatively provide a string to be text-parsed by laterjs:

```js
var task = new ScheduledTask('at 10:15 am also at 5:15pm except on Tuesday', function () {
  console.log("Scheduled task was run.");
});
task.start();
```

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.

[![Support via Gittip](https://rawgithub.com/twolfson/gittip-badge/0.2.0/dist/gittip.png)](https://www.gittip.com/aldeed/)
