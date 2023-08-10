// 15 + 14 + 13 + 12 + 10 + 8

const character = [
  {
    name: 'elvenatto',
    race: 'Elf', // many races for one character
    class: 'ranger', // many classes for one character
    img: 'https://i.imgur.com/mtskKQf.jpeg',
    stats: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    playerName: 'Spencer', // many characters for one player
    items: ['bow', 'dagger', 'quiver'], // one character has many items
    misc: {}
  }]

const Races = {
  elf: {
    name: 'Elf',
    bonus: {
      strength: 0,
      dexterity: 2,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    }
  },
  halforc: {
    name: 'halforc',
    bonus: {
      strength: 2,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    }
  },
  human: {
    name: 'human',
    bonus: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    }
  },



}

const Classes = {
  ranger: {
    'name': 'ranger',
    minScore: {
      strength: 0,
      dexterity: 12,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    proficiency: ['bows', 'daggers']
  },
  warrior: {
    name: 'warrior',
    minScore: {
      strength: 12,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
    proficiency: ['swords', 'axes']
  },
  wizard: {
    name: 'wizard',
    minScore: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 12,
      wisdom: 0,
      charisma: 0,
    },
    proficiency: ['staffs', 'wands']
  },
}
