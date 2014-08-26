Package.describe({
  name: "aldeed:scheduled-tasks",
  summary: "Run a function on a schedule",
  git: "https://github.com/aldeed/meteor-scheduled-tasks.git",
  version: "0.1.0"
});

Npm.depends({
  later: "1.1.6"
});

Package.onUse(function(api) {
  api.add_files(['scheduled-tasks.js'], 'server');
  api.export('later', 'server');
  api.export('ScheduledTask', 'server');
});
