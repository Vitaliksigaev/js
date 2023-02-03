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














// console.log('END')

