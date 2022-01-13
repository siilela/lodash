const myList = ['Water', 'Cake', 'Banana', 'Bread', 'Cake', 'Banana', 'Sweets'];


const myNewArrayChunk=_.chunk(myList,3);
const myNewArrayDifference=_.difference(myList,['Water','Banana']);
const myNewArrayJoin=_.join(myList,[myList,'-']);
const myNewArrayWithout=_.without(myList,'Banana','Bread');
const myNewArrayUnique=_.uniq(myList);

console.log('Chunk method ',myNewArrayChunk)
console.log('Difference ',myNewArrayDifference)
console.log('Join ',myNewArrayJoin)
console.log('Without ',myNewArrayWithout)
console.log('Unique ',myNewArrayUnique)