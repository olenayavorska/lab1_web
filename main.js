const {num}=require('./1_6/1')
const {association}=require('./1_6/2')
const {insertionSort}=require('./1_6/3')
const {frequency}=require('./1_6/4')
const {date}=require('./1_6/5')
let task_6=require('./1_6/6')

//task 1 
let min=0
let max=1000
num(min,max);
//task 2
let str1='abcd'
let str2='omg'
let p=2
let result=association(str1,str2,p)
console.log("task_2 "+result)
//task 3
let A=[2,5,77,11,3,4,[53]]
let B=[2,5,77,11,3,1,53]
console.log('task_3 ')
console.log('A='+insertionSort(A))
console.log('B='+insertionSort(B))
//task 4
let arr = [1, 3, 4, 1, 1, 3, 4, 5];
let result_1 = {};
frequency(arr,result_1 )
//task 5
date();

// Task 7

class Space_station {
    constructor(number, name, planetNumber) {
        this.number = number;
        this.name = name;
        this.planetNumber = planetNumber;
    }
}

class Planet {
    constructor(number, name, station) {
        this.number = number;
        this.name = name;
        this.station = station ;
       
    }

    info() {
        console.log(this)
    }
}

class Goods {

    constructor(number, planetNumber, timeArrival, timeDeparture) {
        this.number = number;
        this.planetNumber = planetNumber;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}
class deliveredGoods {

    constructor(number, planetNumber, timeArrival, timeDeparture) {
        this.number = number;
        this.planetNumber = planetNumber;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}




let goods_ = [
    new Goods(1, 999, new Date(2020, 2, 30), undefined),
        new Goods(2, 777, new Date(2019, 12, 30), new Date(2020, 3, 17)),
        new Goods(3, 666, new Date(2019, 8, 3), new Date(2019, 10, 28)),
        new Goods(4, 228, new Date(2019, 4, 18), new Date(2019, 8, 14)),
        new Goods(5, 69, new Date(2018, 6, 11), new Date(2019, 3, 3))];
 let deliveredgoods_ = [
     new deliveredGoods(1, 999, new Date(2020, 2, 30), undefined),
     new deliveredGoods(2, 777, new Date(2019, 12, 30), new Date(2020, 3, 17)),
     new deliveredGoods(3, 666, new Date(2019, 8, 3), new Date(2019, 10, 28)),
     new deliveredGoods(4, 228, new Date(2019, 4, 18), new Date(2019, 8, 14)),
    new deliveredGoods(5, 69, new Date(2018, 6, 11), new Date(2019, 3, 3))];

let  planets = [new Planet(1, "П", 2), new Planet(2, "DeViL", 4),
    new Planet(3, "C", undefined), new Planet(4, "l", 1),
    new Planet(5, "Infinity", 3), new Planet(6, "abs", 5),
    new Planet(7, "FiveFiveFive", 3), new Planet(8, "FourFourFour", 3)];

let space_stations = [new Space_station(1, 's1', 5), new Space_station(2, 's2', 4),
    new Space_station(3, 's3', 3), new Space_station(4, 's4', 2),
    new Space_station(5, 's5', 1),new Space_station(6, 's6', undefined)];
//A
//додавання нової космічної станцій 
let newStation = new Space_station(Math.round(Math.random()*10), "NewStation", undefined);
console.log('\nдодавання нової космічної станцій\n');

console.log(space_stations);

let addNewStation = (newStation) =>{
    space_stations.push(newStation);
};
addNewStation(newStation);

console.log(space_stations);
//B
// Редагування станції в колекції
console.log('\nРедагування станції в колекції\n');

let editStationClass = () =>{
    let renamedStation
    //=new Space_station(3, 's3', 3);

    space_stations.forEach((value,index) => {

        if (
            value.number === 4) {renamedStation = value ;
            value.name+="renamed";}
    });

   console.log(` станція : ${renamedStation.name}  номер ${renamedStation.number}`)
   console.log(space_stations);
   
};
editStationClass();
//C
//видалення першої космічної станції
console.log('\nвидалення першої космічної станції\n');
console.log(space_stations);
let deleteStation = (space_stations) =>{
    space_stations.shift();
};
deleteStation(space_stations);
console.log(space_stations);

//D
//Пошук однієї станції в колекції
console.log('\nПошук однієї станції в колекції\n');

let findStationClass = (space_station) =>{
    let oveStation
    //=new Space_station(3, 's3', 3);

    space_stations.forEach((value,index) => {

        if (value.name === space_station.name &&
            value.number === space_station.number &&
            value.planetNumber === space_station.planetNumber) {oveStation = value ;
           }
    });

   console.log(` станція : ${oveStation.name}  номер ${oveStation.number}`)
   console.log(space_stations);
   
};
let someStation = new Space_station(3, 's3', 3);
findStationClass(someStation);


//E
//додаваня нової планети 
console.log('\nдодаваня нової планети \n');
 let someNewPl= new  Planet(Math.round(Math.random()*999), "N", undefined);
console.log(planets);
let addNewPl = ( planet) =>{
    planets.push(planet)
};

addNewPl(someNewPl);
console.log(planets);
//F
// Редагування планети в колекції
console.log('\nРедагування планети в колекції -зміна номера з 3 на 15 \n');

let editPlanetClass = () =>{
    let rePlaned
    //=new Space_station(3, 's3', 3);

    planets.forEach((value,index) => {

        if (
            value.number === 3) {rePlaned = value ;
            value.number="15";}
    });

   console.log(` планета : ${ rePlaned.name}  номер ${ rePlaned.number}`)
   console.log(planets);
   
};
editPlanetClass();
//G
//видалення  планети з колекції
console.log('\nвидаленя  планети з колекції\n');
console.log(planets);

let somePlanet = new Planet(4, "l", 1);
let deletePl = (planet) =>{
    planets.forEach((value,index, array) => {
        if(planet.number === value.number&&planet.name === value.name) array.splice(index, 1)
    })
};

deletePl(somePlanet);
console.log(planets);
//H
//знаходження конкретної планети
console.log('\nзнаходження конкретної планети\n');
let findPlanetClass = (Planet) =>{
    

    planets.forEach((value,index) => {
        let findPlanet
        if (value.name === planets.name )
         {findPlanet = value;
        console.log(`Наша планета: ${findPlanet.name} з номером ${findPlanet.number}`);
        }
            //else {console.log(`Наша планета не існує`)}
    }); 
    
};
let forFind = new Planet(5, "lol", 3);
findPlanetClass(forFind);

//I
//Додавання вантажу в колекцію
console.log('\nДодавання вантажу в колекцію\n');


let addGoods = (Goods, deliveredGoods) =>{
    if(deliveredGoods.number !== undefined) console.log(`вантаж  ${number} вже  в колекції!`)
  else {
    deliveredGoods.number = Goods.number;
        console.log(`вантаж номер ${Goods.number} тепер доставлений ${deliveredGoods.number}!`)
   }

console.log( deliveredGoods);

addGoods( deliveredGoods[1],Goods[3]);

console.log( deliveredGoods);
//J
// Редагування вантажу в колекції
//B
// Редагування станції в колекції
console.log('\nРедагування станції в колекції\n');

let editGoodsClass = () =>{
    let edited
    //=new Space_station(3, 's3', 3);

   goods_.forEach((value,index) => {

        if (
            value.number === 4) {edited = value ;
            value.name+="renamed";}
    });

   console.log(` вантаж : ${edited.name}  номер ${edited.number}`)
   console.log(goods_);
   
};

//K
//Видалення вантажу з колекції
console.log('\nВидалення вантажу з колекції\n');

let deleteGoods = (deliveredGoods) =>{
   
    deliveredGoods.number = undefined;
        console.log(`вантаж  ${Goods.number} вже не в колекціх доставлених!`)
    
};

console.log(deliveredGoods);

deleteGoods(deliveredGoods[2]);

console.log(deliveredGoods);


//L
//Пошук усіх станцій планети
console.log('\nПошук усіх усіх станцій планети\n');

let findAllStations = (stations, planet) =>{

    let allStations = Planet.filter(value => {
        return value.station === station.number;
    });

    if (allStations.length === 0) console.log('станцій на планеті немає!');
    else console.log(allStations);

};

findAllStations(stations, planet[4]);

}