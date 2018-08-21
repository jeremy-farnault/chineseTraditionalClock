var exec = require('child_process').exec;

async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

//                 1,2      3,4        5,6      7,8    9,10  11,12  13,14  15,16    17,18      19,20    21,22    23,24
const animals = ['Sheep', 'Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse'];

async function main() {
  const date = new Date();
  const hours = animals[Math.ceil(date.getHours() / 2) - 1] // get a 2 hours slice
  const minutes = animals[Math.ceil((date.getMinutes() + (date.getHours() % 2 === 0 ? 60 : 0)) / 10 )] // get a 10 minutes slice
  const seconds = animals[Math.ceil((date.getMinutes() % 10) / 0.83)] // get approximately a minute (10/12 = 0.83)

  await sh(`say ${hours} ${minutes} ${seconds}`);
}

main();
