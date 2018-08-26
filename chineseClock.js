const animals = [':sheep:', ':monkey:', ':rooster:', ':dog:', ':pig:', ':rat:', ':ox:', ':tiger:', ':rabbit:', ':dragon:', ':snake:', ':horse:']

function translateToEmojis(givenHours, givenMinutes) {
  const hours = animals[Math.ceil(givenHours / 2) - 1] // get a 2 hours slice
  const tenMinutes = animals[Math.ceil((givenMinutes + (givenHours % 2 === 0 ? 60 : 0)) / 10)] // get a 10 minutes slice
  const minutes = animals[Math.ceil((givenMinutes % 10) / 0.83)] // get approximately a minute (10/12 = 0.83)
  return hours + ' ' + tenMinutes + ' ' + minutes
}

function dateToEmojis() {
  const date = new Date()
  return translateToEmojis(date.getHours(), date.getMinutes())
}

function emojisToTime(animal1, animal2, animal3) {

  const hours = ((animals.indexOf(animal1) + 1) * 2) - 1


  // const tenMinutes =


  const minute = Math.ceil((animals.indexOf(animal3) - 1) * 0.83)

  return (hours < 10 ? '0' + hours : hours) + ':' + minute
}

// export function main(arg) {
function main (args) {
  if (args) {
    if (args.split(' ').length === 3 && animals.indexOf(args.split(' ')[0]) > -1 &&
      animals.indexOf(args.split(' ')[1]) > -1 && animals.indexOf(args.split(' ')[2]) > -1) {
      // Args are emojis: return time
      return emojisToTime(args.split(' ')[0], args.split(' ')[1], args.split(' ')[2])
    } else if (args.split(':').length === 2 &&
      +args.split(':')[0] >= 0 && +args.split(':')[0] < 24 &&
      +args.split(':')[1] >= 0 && +args.split(':')[1] < 60) {
      // Args is a time: return emojis
      return translateToEmojis(+args.split(':')[0], +args.split(':')[1])
    }
    return 'You have no power here Gandalf the Grey.'
  } else {
    // No args: return emojis
    return dateToEmojis()
  }
}

console.log(main(':dog: :snake: :tiger:')) // 08:35

// module.exports = main
