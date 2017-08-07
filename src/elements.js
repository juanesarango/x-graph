const nodes = [
  { // node a
    data: { 
      id: 'a',
      score: 0.4,
      name: 'Juanes',
      img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2WAAAAJGM3MDRlOWEzLTIzYzEtNGYyNy1iNmExLTQxYTAwZDQwMjJjZA.jpg' 
    },
    group: 'nodes'
  },
  { // node b
    data: { 
      id: 'b',
      score: 0.8,
      name: 'Fercho',
      img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAV6AAAAJDAyNTE3NzNlLTllYzQtNDk5OC04OGQ2LTM5ZjUyMmYxM2FhZg.jpg' 
    },
    group: 'nodes'
  },
  { // node c
    data: { 
      id: 'c',
      score: 0.3,
      name: 'Blandón',
      img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQWAAAAJGEzMjljZTlkLWRhMmQtNDE0NS1iOTdhLTg0ZTcxMjUyMTNiNA.jpg' 
    },
    group: 'nodes'
  },
  { // node d
    data: { 
      id: 'd',
      score: 1,
      name: 'INVX',
      img: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA0-AAAAJGQ5ZDdjYTIxLWM4NDktNDE5ZC1hOGMxLWE4NDllYjJkYmJiNA.png' 
    },
    group: 'nodes'
  },
  {
      data: {
          id: 'e',
          score: 1,
          name: 'Enmedio',
          img: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAXvAAAAJGQ5NDQ3OGFiLTlkMzItNDUwOS1iNmZiLTIwMzIzZjNhMzI1NQ.png'
      },
      group: 'nodes'
  }
];

const edges = [
  { // edge ab
    data: { 
      id: 'ab', 
      source: 'a', 
      target: 'b',
      weight: 0.8 
    },
    group: 'edges'
  },
  { // edge bc
    data: { 
      id: 'bc', 
      source: 'b', 
      target: 'c',
      weight: 5 
    },
    group: 'edges'
  },
  { // edge ac
    data: { 
      id: 'ac', 
      source: 'a', 
      target: 'c',
      weight: 1 
    },
    group: 'edges'
  },
  { // edge bd
    data: { 
      id: 'bd', 
      source: 'b', 
      target: 'd',
      weight: 2 
    },
    group: 'edges'
  },
  { // edge cd
    data: { 
      id: 'cd', 
      source: 'c', 
      target: 'd',
      weight: 3 
    },
    group: 'edges'
  }
];

