// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(names, arg){
   
    let something = names.filter(name => name == arg || name == arg.toLowerCase())
        console.log(something)
        return something
    //const result = words.filter(word => word.length > 6);
}

//findMatching(drivers, "bobby");

function fuzzyMatch(driversName, arg){
    //return driversName.filter(element => element.toLowerCase().indexOf(arg.toLowerCase())===0);
    let check = driversName.filter(element => element.indexOf(arg) === 0)
    return check;
    //returns names that begin with the provided
    //letters*/
}

fuzzyMatch(drivers, 'S');

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driver, arg){
    let check = driver.filter(driver => driver.name == arg)
    return check;
}

//matchName(drivers2, "Bobby");