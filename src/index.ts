import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, -43, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection(
  'qwertyuiopasdfghjklzxcvbnm'
);
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
