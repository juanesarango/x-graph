const createEdge = (source, target, weight=1) => {
  return {
    data: { 
      id: `${source}${target}`, 
      source, 
      target,
      weight 
    },
    group: 'edges'
  }
};

const createNode = (id, score, name, img) => {
  img = img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIZVJfH3HI9JvlqfPrRO2FwxKbcLUNRJ__MYaiLhGDdmxvTJ7';
  return {
    data: { id, score, name, img },
    group: 'nodes'
  }
};

const elements = [
  /* 0*/ createNode('juar', 0.5, 'Juanes Arango', 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2WAAAAJGM3MDRlOWEzLTIzYzEtNGYyNy1iNmExLTQxYTAwZDQwMjJjZA.jpg'),
  /* 1*/ createNode('fern', 0.5, 'Fernando Sierra', 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAV6AAAAJDAyNTE3NzNlLTllYzQtNDk5OC04OGQ2LTM5ZjUyMmYxM2FhZg.jpg'),
  /* 2*/ createNode('blan', 0.3, 'Daniel Blandón', 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQWAAAAJGEzMjljZTlkLWRhMmQtNDE0NS1iOTdhLTg0ZTcxMjUyMTNiNA.jpg'),
  /* 3*/ createNode('invx', 0.4  , 'Invx', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA0-AAAAJGQ5ZDdjYTIxLWM4NDktNDE5ZC1hOGMxLWE4NDllYjJkYmJiNA.png'),
  /* 4*/ createNode('invi', 0.8  , 'Invictum', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAA0pAAAAJGZiNjQ1ZmY3LTE2ZWYtNDcxZC1iYzdmLWM2ZjhjOWU2ZGJiMA.png'),
  /* 5*/ createNode('kair', 0.6  , 'Kairos', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAsNAAAAJDI5YmY2YTRhLWI0NmQtNDIyYy04OTZlLTlhMGU0NTQ4ZjIyNQ.png'),
  /* 6*/ createNode('enme', 0.6, 'Enmedio', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAXvAAAAJGQ5NDQ3OGFiLTlkMzItNDUwOS1iNmZiLTIwMzIzZjNhMzI1NQ.png'),
  /* 7*/ createNode('sebo', 0.7, 'Sebastián Obregón', 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/09b/3e7/2f35fa6.jpg'),
  /* 8*/ createNode('inve', 0.4, 'Inversionistas'),
  /* 9*/ createNode('part', 0.4, 'Partners'),
  /*10*/ createNode('port', 0.4, 'Portafolio'),
  /*11*/ createNode('otre', 0.4, 'Otras Empresas'),
  /*12*/ createNode('otri', 0.4, 'Otros Inversionistas'),
  /*13*/ createNode('aval', 0.8, 'Grupo Aval', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAlEAAAAJDY0Nzk3OWMxLTc3YWQtNDc1Ny05NTMxLTAxOWNlYWVjNzgwNg.png'),
  /*14*/ createNode('citi', 0.7, 'Citibank', 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAATuAAAAJGQzMGYyNTIxLWI0OWUtNGU1My05NWFjLTYyOTVhNmVjYmY3Zg.png'),
];

// Node 1 
// Invictum, Invx, Kairos
const nodes1 = [
  elements[3],
  elements[4],
  elements[5],
];

const edges1 = [
  createEdge('invi', 'kair', 1),
  createEdge('invx', 'invi', 4),
  createEdge('kair', 'invx', 3),
];

// Node 2
// Invictum y aliados
const nodes2 = [
  elements[4],
  elements[8],
  elements[9],
  elements[10],
];

const edges2 = [
  createEdge('invi', 'part', 3),
  createEdge('invi', 'inve', 4),
  createEdge('invi', 'port', 1),
];

// Node 3
// Inversionistas de Invictum
const nodes3 = [
  elements[1],
  elements[7],
  elements[8],
  elements[12],
];

const edges3 = [
  createEdge('inve', 'sebo', 1),
  createEdge('inve', 'fern', 4),
  createEdge('inve', 'otri', 4)
];

// Node 4
// Sebastián Obregón y redes
const nodes4 = [
  elements[7],
  elements[6],
  elements[11],
  elements[13],
  elements[14]
];

const edges4 = [
  createEdge('sebo', 'enme', 1),
  createEdge('sebo', 'otre', 1),
  createEdge('enme', 'citi', 3),
  createEdge('enme', 'aval', 4),
]

const red1 = [...nodes1, ...edges1];
const red2 = [...nodes2, ...edges2];
const red3 = [...nodes3, ...edges3];
const red4 = [...nodes4, ...edges4];

export { red1, red2, red3, red4 };
