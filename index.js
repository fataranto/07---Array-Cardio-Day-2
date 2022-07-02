
    const people = [
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


      let edades = people.map(p => (new Date().getFullYear()) - p.year);

      console.log(edades);
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?
      let someOlder = people.some(p => (((new Date()).getFullYear()) - p.year) >= 19);

      console.log("is at least one person 19 or older?: ",someOlder);
      //console.log(someOlder);
     
     
      // Array.prototype.every() // is everyone 19 or older?
      const everyOlder = people.every(p => ((new Date()).getFullYear()) - p.year >= 19);


      console.log("is everyone 19 or older?: ", everyOlder);



      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423

      const findComment = comments.find(c => c.id === 823423);

      const filterComment = comments.filter(c => c.id === 823423);

      console.log(findComment);
  
      // Array.prototype.findIndex()
const iId = comments.findIndex(c => c.id == 823423);
console.log(iId);

const nComments = [
    ...comments.slice(0, iId),
    ...comments.slice(iId + 1)
];
console.log(nComments);


      // Find the comment with this ID
      // delete the comment with the ID of 823423