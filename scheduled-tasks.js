later = Npm.require('later');

ScheduledTask = function ScheduledTask(schedule, task) {
  var self = this;
  if (typeof schedule === "string") {
    self.schedule = later.parse.text(schedule);
  } else {
    self.schedule = schedule;
  }
  self.timer = null;
  self.task = Meteor.bindEnvironment(task);
};

ScheduledTask.prototype.start = function scheduledTaskStart() {
  var self = this;
  self.stop();
  self.timer = later.setInterval(self.task, self.schedule);
};

ScheduledTask.prototype.stop = function scheduledTaskStop() {
  var self = this;
  if (self.timer) {
    self.timer.clear();
    self.timer = null;
  }
};
