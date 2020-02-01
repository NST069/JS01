const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const bois1500 = inventors.filter((inventor)=>inventor.year>=1500 && inventor.year<1600);
  console.table(bois1500);

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const inventorsNames = inventors.map(inventor=>inventor.last+' '+inventor.first);
  console.log(inventorsNames);

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const inventorsSorted = inventors.sort((a,b)=>(a.year>b.year)?1:-1);
  console.log(inventorsSorted);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  const totalYr = inventors.reduce((total, inventor)=>{
    return total+=inventor.passed-inventor.year
    },0);
    console.log(totalYr);

  // 5. Sort the inventors by years lived
  const sortedByYear = inventors.sort((a,b)=>{
    (a.passed-a.year<b.passed-b.year)?1:-1;
  });
  console.log(sortedByYear);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//   const category = document.querySelector('.mw-category');
//   const links = Array.from(category.querySelectorAll('a'));
//   const de = links
//               .map(link => link.textContent)
//               .filter(streetName => streetName.includes('de'));
//   console.table(de);

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  const peopleSorted = people.sort((a,b)=>{
      const [aFirst,aLast] = a.split(', ');
      const [bFirst,bLast] = b.split(', ');
      return (aLast>bLast)?1:-1;
  });
  console.log(peopleSorted);

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  const counter = data.reduce((obj,item)=>{
      if(!obj[item]) obj[item]=0;
        obj[item]++;
        return obj;
  },{});
  console.log(counter);

  const people2 = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const anyone19 = people2.some(person => (new Date()).getFullYear() - person.year >= 19 );
  console.log({anyone19});
  // Array.prototype.every() // is everyone 19 or older?
  const everyone19 = people2.every(person => (new Date()).getFullYear() - person.year >= 19 );
  console.log({everyone19});

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const findComment = comments.find((comment)=>comment.id==823423);
  console.log(findComment.text);
  // Array.prototype.findIndex()
  // Find the comment with this ID
  const findByIndex = comments.findIndex((comment)=>comment.id==823423);
  console.log(findByIndex);
  // delete the comment with the ID of 823423
  const newComments = [
      ...comments.slice(0,findByIndex),
      ...comments.slice(findByIndex+1)
  ];
  console.table(newComments);
