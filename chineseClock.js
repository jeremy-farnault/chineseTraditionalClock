const animals = [':sheep:', ':monkey:', ':rooster:', ':dog:', ':pig:', ':rat:', ':ox:', ':tiger:', ':rabbit:', ':dragon:', ':snake:', ':horse:']

function translateToEmojis(givenHours, givenMinutes) {
  const usedHour = ~~(givenHours / 2) + (givenHours % 2 === 0 ? -1 : 0)
  const hours = animals[usedHour === -1 ? animals.length - 1 : usedHour] // get a 2 hours slice
  const tenMinutes = animals[~~((givenMinutes + (givenHours % 2 === 0 ? 60 : 0)) / 10)] // get a 10 minutes slice
  const minutes = animals[Math.ceil((givenMinutes % 10) / 0.83)] // get approximately a minute (10/12 = 0.83)
  return hours + ' ' + tenMinutes + ' ' + minutes
}

function dateToEmojis() {
  const date = new Date()
  return translateToEmojis(date.getHours(), date.getMinutes())
}

function emojisToTime(animal1, animal2, animal3) {
  const tenMinutes = animals.indexOf(animal2) * 10
  const usedHours = ((animals.indexOf(animal1) + 1) * 2) - 1 + ~~(tenMinutes / 60)
  const hours = usedHours === 24 ? 0 : usedHours
  const minute = Math.ceil((animals.indexOf(animal3) - 1) * 0.83)
  const printMinute = tenMinutes % 60 + minute
  return (hours < 10 ? '0' + hours : hours) + ':' + (printMinute < 10 ? '0' + printMinute : printMinute)
}

function main(args) {
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

module.exports = main

// console.log(main())
// console.log(main('15:34'))
// console.log(main(':tiger: :dog: :rat:')) // 15:34
//
//
// console.log(main('23:59'))
// console.log(main(':horse: :rat: :horse:')) // 23:59
//
// console.log(main('00:37'))
// console.log(main(':horse: :dragon: :dragon:')) // 00:37 // ERR
//
// console.log(main('01:53'))
// console.log(main(':sheep: :rat: :pig:')) // 01:53
//
// console.log(main('02:03'))
// console.log(main(':sheep: :ox: :pig:')) // 02:03
//
// console.log(main('10:16'))
// console.log(main(':pig: :tiger: :rabbit:')) // 10:16
