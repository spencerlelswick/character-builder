// 15 + 14 + 13 + 12 + 10 + 8

const character = [
  {
    'name': 'elvenatto',
    'race': 'Elf', // many races for one character
    'class': 'ranger', // many classes for one character
    'img': 'https://i.imgur.com/mtskKQf.jpeg',
    'stats': {
      'strength': 10,
      'dexterity': 10,
      'constitution': 10,
      'intelligence': 10,
      'wisdom': 10,
      'charisma': 10,
    },
    'playerName': 'Spencer', // many characters for one player
    items: ['bow', 'dagger', 'quiver'], // one character has many items
    'misc': {}
  }]

const Races = {
  'name': 'Elf',
  bonus: {
    'strength': 0,
    'dexterity': 2,
    'constitution': 0,
    'intelligence': 0,
    'wisdom': 0,
    'charisma': 0,
  }
}

const Classes = {
  ranger: {
    'name': 'ranger',
    minScore: {
      'strength': 0,
      'dexterity': 12,
      'constitution': 0,
      'intelligence': 0,
      'wisdom': 0,
      'charisma': 0,
    },
    proficiency: ['bows', 'daggers']
  },

}
