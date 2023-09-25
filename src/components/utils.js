

export function getImageurl(person, size='s'){
    return(
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}

export function getImageUrl2(imageId, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageId +
      size +
      '.jpg'
    );
  }
  

  // Data for State.js file
  
  export const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
    artist: 'Marta Colvin Andrade',
    description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
    url: 'https://i.imgur.com/Mx7dA2Y.jpg',
    alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'  
  }, {
    name: 'Floralis Genérica',
    artist: 'Eduardo Catalano',
    description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
    url: 'https://i.imgur.com/ZF6s192m.jpg',
    alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
  }, {
    name: 'Eternal Presence',
    artist: 'John Woodrow Wilson',
    description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
    url: 'https://i.imgur.com/aTtVpES.jpg',
    alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
  }, {
    name: 'Moai',
    artist: 'Unknown Artist',
    description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
    url: 'https://i.imgur.com/RCwLEoQm.jpg',
    alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
  }, {
    name: 'Blue Nana',
    artist: 'Niki de Saint Phalle',
    description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
    url: 'https://i.imgur.com/Sd1AgUOm.jpg',
    alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
  }, {
    name: 'Ultimate Form',
    artist: 'Barbara Hepworth',
    description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
    url: 'https://i.imgur.com/2heNQDcm.jpg',
    alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
  }, {
    name: 'Cavaliere',
    artist: 'Lamidi Olonade Fakeye',
    description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
    url: 'https://i.imgur.com/wIdGuZwm.png',
    alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
  }, {
    name: 'Big Bellies',
    artist: 'Alina Szapocznikow',
    description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
    url: 'https://i.imgur.com/AlHTAdDm.jpg',
    alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
  }, {
    name: 'Terracotta Army',
    artist: 'Unknown Artist',
    description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
    url: 'https://i.imgur.com/HMFmH6m.jpg',
    alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
  }, {
    name: 'Lunar Landscape',
    artist: 'Louise Nevelson',
    description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
    url: 'https://i.imgur.com/rN7hY6om.jpg',
    alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
  }, {
    name: 'Aureole',
    artist: 'Ranjani Shettar',
    description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
    url: 'https://i.imgur.com/okTpbHhm.jpg',
    alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
  }, {
    name: 'Hippos',
    artist: 'Taipei Zoo',
    description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
    url: 'https://i.imgur.com/6o5Vuyu.jpg',
    alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
  }];
  

  //// initialTravelPlan Object imported in ChooseState file

  export const initialTravelPlan = {
    0: {
      id: 0,
      title: '(Root)',
      childIds: [1, 42, 46],
    },
    1: {
      id: 1,
      title: 'Earth',
      childIds: [2, 10, 19, 26, 34]
    },
    2: {
      id: 2,
      title: 'Africa',
      childIds: [3, 4, 5, 6 , 7, 8, 9]
    }, 
    3: {
      id: 3,
      title: 'Botswana',
      childIds: []
    },
    4: {
      id: 4,
      title: 'Egypt',
      childIds: []
    },
    5: {
      id: 5,
      title: 'Kenya',
      childIds: []
    },
    6: {
      id: 6,
      title: 'Madagascar',
      childIds: []
    }, 
    7: {
      id: 7,
      title: 'Morocco',
      childIds: []
    },
    8: {
      id: 8,
      title: 'Nigeria',
      childIds: []
    },
    9: {
      id: 9,
      title: 'South Africa',
      childIds: []
    },
    10: {
      id: 10,
      title: 'Americas',
      childIds: [11, 12, 13, 14, 15, 16, 17, 18],   
    },
    11: {
      id: 11,
      title: 'Argentina',
      childIds: []
    },
    12: {
      id: 12,
      title: 'Brazil',
      childIds: []
    },
    13: {
      id: 13,
      title: 'Barbados',
      childIds: []
    }, 
    14: {
      id: 14,
      title: 'Canada',
      childIds: []
    },
    15: {
      id: 15,
      title: 'Jamaica',
      childIds: []
    },
    16: {
      id: 16,
      title: 'Mexico',
      childIds: []
    },
    17: {
      id: 17,
      title: 'Trinidad and Tobago',
      childIds: []
    },
    18: {
      id: 18,
      title: 'Venezuela',
      childIds: []
    },
    19: {
      id: 19,
      title: 'Asia',
      childIds: [20, 21, 22, 23, 24, 25],   
    },
    20: {
      id: 20,
      title: 'China',
      childIds: []
    },
    21: {
      id: 21,
      title: 'India',
      childIds: []
    },
    22: {
      id: 22,
      title: 'Singapore',
      childIds: []
    },
    23: {
      id: 23,
      title: 'South Korea',
      childIds: []
    },
    24: {
      id: 24,
      title: 'Thailand',
      childIds: []
    },
    25: {
      id: 25,
      title: 'Vietnam',
      childIds: []
    },
    26: {
      id: 26,
      title: 'Europe',
      childIds: [27, 28, 29, 30, 31, 32, 33],   
    },
    27: {
      id: 27,
      title: 'Croatia',
      childIds: []
    },
    28: {
      id: 28,
      title: 'France',
      childIds: []
    },
    29: {
      id: 29,
      title: 'Germany',
      childIds: []
    },
    30: {
      id: 30,
      title: 'Italy',
      childIds: []
    },
    31: {
      id: 31,
      title: 'Portugal',
      childIds: []
    },
    32: {
      id: 32,
      title: 'Spain',
      childIds: []
    },
    33: {
      id: 33,
      title: 'Turkey',
      childIds: []
    },
    34: {
      id: 34,
      title: 'Oceania',
      childIds: [35, 36, 37, 38, 39, 40, 41],   
    },
    35: {
      id: 35,
      title: 'Australia',
      childIds: []
    },
    36: {
      id: 36,
      title: 'Bora Bora (French Polynesia)',
      childIds: []
    },
    37: {
      id: 37,
      title: 'Easter Island (Chile)',
      childIds: []
    },
    38: {
      id: 38,
      title: 'Fiji',
      childIds: []
    },
    39: {
      id: 40,
      title: 'Hawaii (the USA)',
      childIds: []
    },
    40: {
      id: 40,
      title: 'New Zealand',
      childIds: []
    },
    41: {
      id: 41,
      title: 'Vanuatu',
      childIds: []
    },
    42: {
      id: 42,
      title: 'Moon',
      childIds: [43, 44, 45]
    },
    43: {
      id: 43,
      title: 'Rheita',
      childIds: []
    },
    44: {
      id: 44,
      title: 'Piccolomini',
      childIds: []
    },
    45: {
      id: 45,
      title: 'Tycho',
      childIds: []
    },
    46: {
      id: 46,
      title: 'Mars',
      childIds: [47, 48]
    },
    47: {
      id: 47,
      title: 'Corn Town',
      childIds: []
    },
    48: {
      id: 48,
      title: 'Green Hill',
      childIds: []
    }
  };
  


