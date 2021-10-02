const {Graph,addEdge,isReachable}= require('../graph')
describe(" ", () => {
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(1, 2);
addEdge(2, 0);
addEdge(2, 3);
addEdge(3, 3);


it("There is a path from 1,3====>1,3 connected!!!", () => {
    let u = 1;
let v = 3;
    expect(isReachable(u, v)).toEqual(true);
})

it("There is no  path from 3,0====>3,0 not connected!!!", () => {
    let u = 3;
let v = 0;
    expect(isReachable(u, v)).toEqual(false);
})

it("There is a path from 2,0====>2,0 connected!!!", () => {
    let u = 2;
let v = 0;
    expect(isReachable(u, v)).toEqual(true);
})
});