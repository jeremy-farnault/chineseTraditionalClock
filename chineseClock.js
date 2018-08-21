const animals = [':sheep:', ':monkey:', ':rooster:', ':dog:', ':pig:', ':rat:', ':ox:', ':tiger:', ':rabbit:', ':dragon:', ':snake:', ':horse:'];

function main() {
  const date = new Date();
  const hours = animals[Math.ceil(date.getHours() / 2) - 1] // get a 2 hours slice
  const minutes = animals[Math.ceil((date.getMinutes() + (date.getHours() % 2 === 0 ? 60 : 0)) / 10 )] // get a 10 minutes slice
  const seconds = animals[Math.ceil((date.getMinutes() % 10) / 0.83)] // get approximately a minute (10/12 = 0.83)

  return hours + ' ' + minutes + ' _' + seconds;
}

module.exports = main
