/*
   2 - 0
  / \
 1 - 3

*/

// Edge List ( represemta las conexiones en array del grafo)
const graph = [
  [ 0, 2 ],
  [ 2, 3 ],
  [ 2, 1 ],
  [ 1, 3 ],
];

// Adjacent List
const graph2 = [
  [ 2 ],       // 0
  [ 2, 3 ],    // 1
  [ 0, 1, 3 ], // 2
  [ 1, 2 ],    // 3
];
const graph3 = {   //visualmente esta mejor
  0: [ 2 ],
  1: [ 2, 3 ],
  2: [ 0, 1, 3 ],
  3: [ 1, 2 ]
}

// Adjacent Matrix
const graph4 = [
  [ 0, 0, 1, 0 ],
  [ 0, 0, 1, 1 ],
  [ 1, 1, 0, 1 ],
  [ 0, 1, 1, 0 ],
];
const graph5 = {
  0: [ 0, 0, 1, 0 ],
  1: [ 0, 0, 1, 1 ],
  2: [ 1, 1, 0, 1 ],
  3: [ 0, 1, 1, 0 ],
}