const Weapons = [
  {
    attacks: [
      {
        damage: 3,
        description: 'Swing for the sky.',
        name: 'Swipe',
        range: 2,
      },
      {
        damage: 5,
        description: '"Get off of my lawn!"',
        name: 'Poke',
        range: 3,
      }
    ],
    id: '0',
    imagePath: '/images/cane_of_destruction.jpg',
    name: 'Cane of Destruction',
    stats: {
      description: 'Use it to walk. Use it to crowd control your enemies. Use it for life.',
      strengthRequired: 2
    }
  },
  {
    attacks: [
      {
        damage: 4,
        description: 'Area of effect attack guaranteed to make everyone feel uncomfortable.',
        name: 'Grumble',
        range: 4,
      },
      {
        range: 10,
        name: 'Do Taxes',
        damage: 2,
        description: 'Bury em\' with paperwork.'
      }
    ],
    id: '1',
    imagePath: '/images/jim_rice.jpg',
    name: 'Summon Dad Staff',
    stats: {
      description: 'Summon a Jim Rice at your convenience.',
      strengthRequired: 3
    }
  },
  {
    attacks: [
      {
        damage: 0,
        description: `
          Blows heat in a specific direction. Not particularly useful.
          Actually, this weapon kinda just sucks.
        `,
        name: 'Blow Heat',
        range: 1,
      },
    ],
    id: '2',
    imagePath: '/images/blow_dryer.jpg',
    name: 'Blow Dryer',
    stats: {
      description: 'Use it to dry your hair. Or remove dents in your car.',
      strengthRequired: 1
    }
  },
  {
    attacks: [
      {
        damage: 0,
        description: `
          Throw flames from your gun that throws flames (I forget what it's called)
          to protect your Spaceballs memorabilia.
        `,
        name: 'Shoot',
        range: 1,
      },
    ],
    id: '3',
    imagePath: '/images/flamethrower.jpg',
    name: 'Spaceballs, the Flamethrower',
    stats: {
      description: 'Kids love this one.',
      strengthRequired: 1
    }
  },
];

module.exports = Weapons;
