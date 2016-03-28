function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();
  console.log(`[${format(start)}] Starting '${task.name}'...`); // eslint-disable-line no-console
  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    const log = `[${format(end)}] Finished '${task.name}' after ${time} ms`;
    console.log(log); // eslint-disable-line no-console
  });
}

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename];
  const module = require(`./${process.argv[2]}.js`).default;
  run(module).catch(err => console.error(err.stack)); // eslint-disable-line no-console
}

export default run;
