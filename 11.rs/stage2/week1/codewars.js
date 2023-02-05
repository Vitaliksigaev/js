// KATA https://www.codewars.com/kata/531489f2bb244a5b9f00077e/train/javascript
// console.log(1)

// function undoRedo(object) {
//     let actionsSetDel = [];
//     let actionsRepeat = [];
    
//       return {
//         set: function(key, value) {
//           actionsSetDel.push([key, object[key]]); // Отправляем что произошло
//           actionsRepeat = []; // обновляем что нужно повторить
// //           object.key = value;
          
//           if(object.key) {
//             object.key = value;
//           } else {
//             object[key] = value;        
//           }
//       },
//         get: function(key) {        
//         return object[key]     
//       },
//           del: function(key) {
//           actionsSetDel.push([key, object[key]]);// Отправляем что произошло
//           actionsRepeat = []; // обновляем что нужно повторить
//         // if (object[key]) {
//         //   var value = object[key];
//         // }
//           delete object[key]; // удаляем ключ      
//           console.log(actionsSetDel)      
//           console.log(actionsRepeat) 
//       },
//           undo: function() {
//             console.log(actionsSetDel)      
//             console.log(actionsRepeat)         
//           if (actionsSetDel.length == 0) throw Error();
//           let undoOp = actionsSetDel.pop();
//           actionsRepeat.push([undoOp[0], object[undoOp[0]]]);
//           object[undoOp[0]] = undoOp[1];           
//       },
//           redo: function() {
//           if (actionsRepeat.length == 0) throw Error();
//           var redoOp = actionsRepeat.pop();
//           actionsSetDel.push([redoOp[0], object[redoOp[0]]]);
//           if (redoOp[1] !== undefined) object[redoOp[0]] = redoOp[1];
//             else delete object[redoOp[0]];         
//           }
//       };
//   }

//   function undoRedo(object) {
//     let actionsSetDel = [];
//     let actionsRepeat = [];
    
//       return {
//         set: function(key, value) {
//           actionsSetDel.push([key, value]); // Отправляем что произошло

//           actionsRepeat = []; // обновляем что нужно повторить
// //           object.key = value;
          
//           if(object.key) {
//             object.key = value;
//           } else {
//             object[key] = value;        
//           }
//           console.log('set - ' + key + ' - ' + value);
//           console.log(object)
//           console.log(actionsSetDel);
//       },
//         get: function(key) {        
//         return object[key]     
//       },
//           del: function(key) {
//           actionsSetDel.push([key, object[key]]);// Отправляем что произошло
//           actionsRepeat = []; // обновляем что нужно повторить
//         // if (object[key]) {
//         //   var value = object[key];
//         // }
//           delete object[key]; // удаляем ключ      
//           //console.log(actionsSetDel)      
//           //console.log(actionsRepeat) 
//             console.log('delete - ' + object)
//       },
//           undo: function() {
//             console.log('UNDO')
//             console.log(object)
//             console.log(actionsSetDel);      
//             console.log(actionsRepeat);         
//           if (actionsSetDel.length == 0) throw Error();
//           let undoOp = actionsSetDel.pop();
//           actionsRepeat.push([undoOp[0], object[undoOp[0]]]);
//           object[undoOp[0]] = undoOp[1]; 
//             console.log(actionsSetDel);      
//             console.log(actionsRepeat); 
//             console.log(object)
//       },
//           redo: function() {
//             console.log(object)
//           if (actionsRepeat.length == 0) throw Error();
//           var redoOp = actionsRepeat.pop();
//           actionsSetDel.push([redoOp[0], object[redoOp[0]]]);
//           if (redoOp[1] !== undefined) object[redoOp[0]] = redoOp[1];
//             else delete object[redoOp[0]];         
//           }
//       };
//   }


// function undoRedo(object) {
//     let lastActions = [];
//     let undoActions = [];
//     return {
//       set: function (key, value) {
//         if (object.hasOwnProperty(key) === true) {
//           lastActions.push(["edit", key, object[key], value]);
//         } else {
//           lastActions.push(["set", key, value]);
//         }
//         object[key] = value;
//         undoActions = [];
//       },
//       get: function (key) {
//         return object[key];
//       },
//       del: function (key) {
//         if (object[key]) {
//           lastActions.push(["del", key, object[key]]);
//           delete object[key];
//           undoActions = [];
//         }
//       },
//       undo: function () {
//         console.log(lastActions)
//         if (lastActions.length === 0) {
//           throw new Error("No actions");
//         }
//         const last = lastActions.pop();
//         if (last[0] === "set") {
//           delete object[last[1]];
//         } else if (last[0] === "edit") {
//           object[last[1]] = last[2];
//         } else if (last[0] === "del") {
//           object[last[1]] = last[2];
//         }
//         undoActions.push(last);
//       },
//       redo: function () {
//         if (undoActions.length === 0) {
//           throw new Error("No undo");
//         }
//         const last = undoActions.pop();
//         if (last[0] === "set") {
//           object[last[1]] = last[2];
//         } else if (last[0] === "edit") {
//           object[last[1]] = last[3];
//         } else if (last[0] === "del") {
//           delete object[last[1]];
//         }
//         lastActions.push(last);
//       },
//     };
//   }


//   var obj = {
//     x: 1,
//     y: 2
//   };

//   undoRedo(obj)
//   undoRedo(obj).get('x');
//   undoRedo(obj).del('y');
//   undoRedo(obj).undo();
//   undoRedo(obj).get('y');


//   function undoRedo(obj) {
// 	var commands = []
// 	var index = -1
	
// 	function add(cmd) {
// 		commands.splice(index + 1, commands.length - index)
// 		commands.push(cmd)
// 		index = commands.length - 1
// 	}
	
// 	return {
// 		get: function(key) {
// 			return obj[key]
// 		},
// 		set: function(key, value) {
// 			var prev = obj[key]
// 			var cmd = {
// 				exec: function() { obj[key] = value },
// 				undo: function() { obj[key] = prev }
// 			}
			
// 			add(cmd)
// 			cmd.exec()
// 		},
// 		del: function(key) {
// 			var prev = obj[key]
// 			var cmd = {
// 				exec: function() { delete obj[key] },
// 				undo: function() { obj[key] = prev }
// 			}
			
// 			add(cmd)
// 			cmd.exec()
// 		},
// 		undo: function() {
// 			var cmd = commands[index]
// 			if (cmd === void 0) throw new Error()
			
// 			cmd.undo()
// 			index--
// 		},
// 		redo: function() {
// 			var cmd = commands[index + 1]
// 			if (cmd === void 0) throw new Error()
			
// 			cmd.exec()
// 			index++
// 		}
// 	}
// }




// function undoRedo(object) {
//     var undoArgs = [], redoArgs = [];
//       return {
//           set(key, value) {
//         undoArgs.push([key, object[key]]);
//         redoArgs = [];
//         object[key] = value; },
//           get(key) { return object[key]; },
//           del(key) { 
//         undoArgs.push([key, object[key]]);
//         redoArgs = [];
//         delete object[key]; },
//           undo() {
//         if (undoArgs.length == 0) throw "Can't undo!";
//         var undoOp = undoArgs.pop();
//         redoArgs.push([undoOp[0], object[undoOp[0]]]);
//         object[undoOp[0]] = undoOp[1]; },
//           redo() {
//         if (redoArgs.length == 0) throw "Can't redo!";
//         var redoOp = redoArgs.pop();
//         undoArgs.push([redoOp[0], object[redoOp[0]]]);
//         if (redoOp[1] !== undefined) object[redoOp[0]] = redoOp[1];
//         else delete object[redoOp[0]]; }
//           }}





//https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript 


// class PaginationHelper {
//     // let arr = [];
// 	constructor(collection, itemsPerPage) {
//         this.collection = collection;
//         this.itemsPerPage = itemsPerPage;
// 	// The constructor takes in an array of items and a integer indicating how many
// 	// items fit within a single page
// 	}
// 	itemCount() {
//         console.log(this.collection.length);
//         return this.collection.length;
// 	// returns the number of items within the entire collection
// 	}
// 	pageCount() {
//         console.log(Math.ceil(this.collection.length/this.itemsPerPage));
//         return Math.ceil(this.collection.length/this.itemsPerPage)
// 	// returns the number of pages
// 	}
// 	pageItemCount(pageIndex) {
//         if(pageIndex*this.itemsPerPage >= this.collection.length || pageIndex<0) {
//             console.log(-1)
//             return -1;
//         }
//         if(pageIndex < Math.floor(this.collection.length/this.itemsPerPage)) {
//             //console.log(this.itemsPerPage)
//             return this.itemsPerPage
//         } else {
//             //console.log(this);
//             //console.log(this.collection.length - this.itemsPerPage*Math.floor(this.collection.length/this.itemsPerPage))
//             return (this.collection.length - this.itemsPerPage*Math.floor(this.collection.length/this.itemsPerPage))
//         }
// 	// returns the number of items on the current page. page_index is zero based.
// 	// this method should return -1 for pageIndex values that are out of range
// 	}
// 	pageIndex(itemIndex) {
//         if (itemIndex == 0 && this.collection.length>0) {
//           return 0
//         }
//         if(itemIndex >= this.collection.length || itemIndex < 0 || this.collection.length == 0) {

//             return -1;
//         }
// //         console.log(Math.trunc(itemIndex/this.itemsPerPage))
//         console.log(itemIndex)
//         console.log(this.collection.length)
//         return (Math.trunc(itemIndex/this.itemsPerPage))
// 	// determines what page an item is on. Zero based indexes
// 	// this method should return -1 for itemIndex values that are out of range
// 	}
// }

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// // helper.pageCount(); //should == 2
// // helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// // helper.pageItemCount(2); // should == -1 since the page is invalid


// class PaginationHelper {
//     constructor(collection, itemsPerPage) {
//       Object.assign(this, {collection, itemsPerPage});
//     }
  
//     itemCount() {
//       return this.collection.length;
//     }
  
//     pageCount() {
//       return Math.ceil(this.collection.length / this.itemsPerPage);
//     }
  
//     pageItemCount(pageIndex) {
//       return pageIndex < 0 || pageIndex >= this.pageCount() ? -1 : pageIndex < this.pageCount() - 1 ? this.itemsPerPage : this.itemCount() % this.itemsPerPage;
//     }
  
//     pageIndex(itemIndex) {
//       return itemIndex < 0 || itemIndex >= this.itemCount() ? -1 : itemIndex / this.itemsPerPage ^ 0;
//     }
//   }


//https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

//Метод становится новым Object.defineProperty()или изменяет Существующее свойство существенное на объекте, возвращая этот объект.

// var Cat = (function () {
//     const cats = [];

//     const constructor = function (name, weight) {
//         if(!name || !weight) throw  Error('name or weight is required');
//         Object.defineProperty(this, 'name', { get: () => name });
//         Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value });
//         cats.push(this);
//     }

//     constructor.averageWeight = () => {
//         console.log(cats);
//         return cats.reduce((sum, cat) => (sum + cat.weight), 0) / cats.length;
//     }
//     return constructor;
// }() )

// fluffy = new Cat('fluffy', 15);
// garfield = new Cat('garfield', 25);


// (fluffy.weight, 15)
// console.log(Cat.averageWeight());
// Test.assertEquals(fluffy instanceof Cat, true);
// Test.assertEquals(fluffy.averageWeight, undefined);
// Test.assertEquals(typeof Cat.averageWeight, "function");
// Test.assertEquals(Cat.averageWeight(), 20);


//https://www.codewars.com/kata/5366cfe48d004ce19600104b/train/javascript

// 15.2.3.5 Object.create ( O [, Properties] ) # Ⓣ Ⓡ 
//// Функция create создает новый объект с указанным прототипом. При вызове функции создания выполняются следующие шаги:
//// Если Type ( O ) не является Object или Null, генерируется исключение TypeError .
// Пусть obj будет результатом создания нового объекта как бы с помощью выражения new Object(), где Object — это стандартный встроенный конструктор с таким именем
// Установите для внутреннего свойства [[Prototype]] obj значение O .
// Если аргумент Properties присутствует, а не undefined , добавьте собственные свойства в obj , как если бы вызывали стандартную встроенную функцию Object.defineProperties с аргументами obj и Properties .
// Вернуть объект .

// const citizen = {
//     sleep: function(){ return "zzZ..."; },
//     panic: function(){ return "AaAaAaAa!"; }
//   };

//   const citizen = 0;


// Object.create = function(prototype, properties) {
//     console.log( typeof prototype );
//     console.log( prototype );
//     console.log( properties );
  
//     let obj = new Object(prototype);
//     Object.setPrototypeOf(obj, properties);  
  
//     if (typeof prototype !== 'object' || prototype !== null) {
//         console.log('Sorry this is not object')
//         throw new Error();
//     }

//     if (properties !== undefined) {
//         Object.defineProperties(obj, properties);
//     } else {
//         Object.setPrototypeOf(obj, properties);
//     }
//       return obj
//     }
//   };
//   assert(veteran !== citizen, "veteran is equal citizen. wat??");
//   assert(veteran instanceof citizen.constructor, "veteran must inherit citizen");
//   assert.strictEqual(veteran.sleep(), "zzZ...", "first argument was not handled properly");
//   assert.strictEqual(veteran.panic(), "SNAFU", "`properties` argument was not handled properly");



// const veteran = Object.create(citizen, {panic: {
//     value: function(){
//                 return "SNAFU";
//             }
//         }
//     }
// );

// console.log(veteran.panic());
// console.log(veteran.sleep());




//https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/train/javascript

// function assembleString(array){
//     if (array[0] == undefined) {
//         return undefined
//     }
//     console.log(array);
//     console.log(array[0]);
  
//     let word = array[0].split('');
//     console.log(word);
//     for ( let i = 0; i < word.length; i++) {
//         if (word[i] == "*") {
//             //console.log(array[0][i]);        
//           for ( let j = 0; j < array.length; j++) { 
           
//             if( array[j][i] !== "*" ) {
//               console.log(array[j][i]);
//               word[i] = array[j][i];
//               console.log(word[i]);
//             };
//             if (word[i] == "*" && j == array.length - 1) {
//               word[i] = '#';
//             }            
//           }
//         }
//     }  
//   console.log(word.join(''));
//   return word.join('');
// }

////////////////////////////////////////////////////////////////

// const assembleString = a => {
//     return [...Array((a[0] || []).length).keys()]
//       .map(i => a.map(s => s[i])
//       .filter(c => c != '*')[0] || '#')
//       .join('');
//   }


//   function assembleString(array){  
//     console.log([...array[0]]);
//     return !array.length ? "" : [...array[0]].map((x, i) => {
//       let s = array.find(y => y[i] != "*")
//       return !s ? "#" : s[i]
//     }).join``
//   }


// assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])


// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript


// var obj = {
//     person: {
//       name: 'joe',
//       history: {
//         hometown: 'bratislava',
//         bio: {
//           funFact: 'I like fishing.'
//         }
//       }
//     }
//   };

//   Object.prototype.hash = function(string) {
    
// let thi = 'this';
// let str = string.split('.');

// for ( let i = 0; i<= str.length; i++) {
//   console.log(thi);
//   console.log('this.' + `${string}`);
//   if ( thi == 'this.' + `${string}`){
//     console.log(thi);
//     return eval(thi);
//   }
//   if (eval(thi) == undefined ) {
//     return undefined
//   } else {
//      thi = thi +'.' +`${str[i]}`;     
//   }      
// }


// // str = string.split('.');
// // str1 = this + `${'.person.name'}`;


// // console.log(str2);
// // console.log(this);
// // for (const [key, value] of Object.entries(this)) {
// //     console.log(`${key}: ${value}`);
// //   }

// // console.log(Object.hasOwn(this, 'person'));
// // console.log(eval(str2));

//   }
  
//   obj.hash('person.name'); // 'joe'
//   obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
//   obj.hash('person.history.homeStreet'); // undefined
//   obj.hash('person.animal.pet.needNoseAntEater'); // undefined


// Object.prototype.hash = function(string) {
//     var arr = string.split('.');
//     return arr.reduce(function(pv, cv){
//       return (pv) ? pv[cv] : pv;
//     }, this);
//   }

//   Object.prototype.hash = function(string) {
//     var obj = this;
//     string.split(".").forEach(function(el) { 
//       try {
//         obj = obj[el];
//       }
//       catch(e) { 
//         obj = undefined;
//       }
//     });
//     return obj;
//   }

//   Object.prototype.hash = function(s) {
//     s = s.split('.');
//     let o = this;
//     for (let i=0; o && i<s.length; i++) 
//       o = o[s[i]] ;
//     return o;
//  }


//  Object.prototype.hash = function(string) {
//     return string.split('.').reduce((result = this, item) => result = result[item], this);
//   }

// Object.prototype.hash = function(string) {
//     try {
//       return string.split('.').reduce((acc, item) => acc[item], this);
//     } catch(err) {
//       return undefined;
//     }
   
//   }


//https://www.codewars.com/kata/57eb936de1051801d500008a/solutions/javascript

// function explode(x){
//     console.log(x);
//     let sum;
//       if (typeof x[0] === "number") {
//       sum = x[0];
//       console.log(sum)
//     } 
//     if (typeof x[1] === "number") {
//       sum = x[1];
//       console.log(sum)
//     }
//     if (typeof x[0] === "number" && typeof x[1] === "number") {
//       console.log('Два числа');
//       console.log(typeof x[0]);
//       console.log(typeof x[1]);
      
//       sum = x[0] + x[1];
//       console.log(sum)
//     } 
//     if (typeof x[0]  !== "number" && typeof x[1] !== "number") {
//       return 'Void!';
//     } 
  
    
//     let resultArr = [];
    
//     for( let i = 0; i < sum; i++) {
//       console.log(sum)
//       resultArr.push(x);
//     }
//     console.log(resultArr)
//     return resultArr 
    
  
//   }

//   const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Array Array Array", () => {
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]);
//     assert.deepEqual(explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]] ); 
//     assert.deepEqual(explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]); 
//     assert.deepEqual(explode(['a', 'b']), 'Void!');  
//     assert.deepEqual(explode(["a", 0]), []); 
//   })
// });

//const explode=([x,y])=>x+0!=x&&y+0!=y?"Void!":Array((+x||0)+(+y||0)).fill([x,y])

//function explode(x){
//     let [a,b] = x;
  
//     if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
//     else if(typeof a == "number") return new Array(a).fill(x);
//     else if(typeof b == "number") return new Array(b).fill(x);
    
//     return 'Void!';
//   }

// console.log('END')


//https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript
// // TODO

// Object.prototype.square = function () {
//     let ar1 = this.map(x => x**2);
//     console.log(ar1);
//     return ar1;
// }
// Object.prototype.cube = function () {
//     let ar1 = this.map(x => x**3);
//     console.log(ar1);
//     return ar1;
// }

// Object.prototype.sum = function () {
//     let resSum = 0;
//     this.forEach(elem => resSum = resSum + elem);
//     return resSum;
// }

// Object.prototype.average = function () {
//   if(this[0] == undefined) {
//     return NaN
//   }
    
//     let resSum = 0;
//     this.forEach(elem => resSum = resSum + elem);
//     return resSum / this.length;
// }

// Object.prototype.even = function () {
//     let evenArr = [];
//   console.log(this);
//     this.forEach(elem => {
//       if( elem % 2 == 0) {
//       evenArr.push(elem);
//       }
//     });
//     return evenArr;
// }


// Object.prototype.odd = function () {
//     let resodd =[] ;
//   console.log(this);
//     this.forEach(elem => {
//       if( elem % 2 ) {
//       resodd.push(elem);
//       }
//     });
//     return resodd;
// }


// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }



// class Person {
//     // You can't redeclare "Person", so this won't work...
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
    
//     getName() {
//       return this.firstName + ' ' + this.lastName;
//     }
    
//     // get name(){
//     //   return this.firstName + ' ' + this.lastName;
//     // }
//     // set name(str){
//     // //   console.log(str)
//     //   let arr = str.split(' ');
//     //   this.firstName = arr[0];
//     //   this.lastName = arr[1];
//     // }
// }

// Object.defineProperty(Person.prototype, "name", {
//     get: function() { 
//       return this.firstName + ' ' + this.lastName;
//     },
//     set: function(str) {    
//       let arr = str.split(' ');    
//       this.firstName = arr[0]; 
//       this.lastName = arr[1];
//     }
//   });

// Object.prototype.name1 = function(str){
//     alert(str);


//         // let arr = str.split(' ');
//         // this.firstName = arr[0];
//         // this.lastName = arr[1];
//         // return this.firstName + ' ' + this.lastName;
// };


//   let augustusCole = new Person('Augustus', 'Cole');
//   console.log(augustusCole.getName()); // Augustus Cole
//   augustusCole.name = 'Cole Train';

//   console.log(augustusCole.firstName); // => 'Cole'
//   console.log(augustusCole.lastName); // => 'Train'
//   console.log(augustusCole.getName()); // => 'Cole Train'
//   console.log(augustusCole.name); // => 'Cole Train'
//   console.log(augustusCole)

// Object.defineProperty(Person.prototype, "name", {
//     get: Person.prototype.getName,
//     set: function(name) { [this.firstName, this.lastName] = name.split(" "); },
//   });

//   Object.defineProperties(Person.prototype, {
//     name: {
//       get() {
//         return this.firstName + ' ' + this.lastName;
//       },
//       set(v) {
//         this.firstName = v.split(' ')[0]
//         this.lastName = v.split(' ')[1]
  
//       }
//     }
//   });



//https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript


// const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function generateName()
// {
//   let result = Array(6);// создаем массив Array
//   result = result.fill(null) // заполняем значениями null
//   result = result.map( elem => alpha[Math.floor(Math.random()*52)])
//   result = result.join('');
 
//   console.log(result)
//   return photoManager.nameExists(result) ? generateName() : result 
  
//   // make sure to check the name is unique via the photoManager object
// }

// generateName()

// function generateName() {
//     let str = Math.random().toString(36).substring(0, 6);
//     return str;
// }

//https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

// function isSantaClausable(obj) {

//     if(typeof obj['sayHoHoHo'] == 'function' && typeof obj['distributeGifts'] == 'function'&& typeof obj['goDownTheChimney'] == 'function') {
//       return true
//     } else {
//       return false
//     }
  
    
    
//   //   return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
//   //     return typeof obj[methodName] == 'function';
//   //   });
//   }


//https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript
//6 kyu Array#reduce
// // RIGHT ANSWER
// for( let i = 0; i < this.length; i++) {
//     if (typeof initial === 'undefined' || typeof initial === 'null') {
//       initial = this[0];
//       ++i
//     }
//     initial = process (initial, this[i]);
//     //initial = process.apply ( this, [initial, this[i]])
//   }
//   return initial
// //







// Array.prototype.reduce = function(process, initial) {
//     //console.log("START =" + process);
//     console.log(initial);
//     //console.log(this);
//     let result = '';
//     if(initial === undefined) {
//       result = this[0];
//     } 
    
//     if(initial) {
//         initial ={};
//       result = process(initial, this[0]);
//       console.log(result);
//     } 
    
//     for ( let i = 1 ; i < this.length; i++) {
//         if(this[i] !== "" && this[i] !== 'undefined' && this[i] !== null&& this[i] !== undefined) {

//         result = process(result, this[i])
//         console.log(result);
//         console.log(this[i]);    
//       }
//     }
    
    
  
//     console.log(result);
//     return result
//     // ...
//   }


// let arr1 = [ 'bee', 'bird','bee', 'undefined', undefined ];

// let process1 = function count(obj,elem){
//     //console.log(obj[elem]);
//     if(!obj[elem]) obj[elem] = 0;
//     obj[elem] += 1;
//     return obj
//   }
// let initial1 = { bird: 0, bee: 0, coc: 1};
//   arr1.reduce(process1, initial1);



//https://www.codewars.com/kata/513e1e47c600c93cef000001/train/javascript

// class Animal {
//     constructor (name,type) {
//       this.name = name,
//       this.type = type
//     }
//     toString() {
//         console.log(this.name)
//         return `${this.name} is a ${this.type}`;
//     }
//     // get name() {
//     //   return this.name
//     // }
//     set name (value) {
//         console.log(this.name)
//         this.name = value;
//     }
//   }


//   let dog = new Animal('Max', 'dog');
//   dog.toString(); // should return 'Max is a dog'
//   dog.type; // should == 'dog'
//   dog.name; // should == 'Max'
//   dog.name = 'Lassie'; // should set name to 'Lassie'

