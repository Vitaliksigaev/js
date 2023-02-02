// KATA https://www.codewars.com/kata/531489f2bb244a5b9f00077e/train/javascript
// console.log(1)

function undoRedo(object) {
    let actionsSetDel = [];
    let actionsRepeat = [];
    
      return {
        set: function(key, value) {
          actionsSetDel.push([key, object[key]]); // Отправляем что произошло
          actionsRepeat = []; // обновляем что нужно повторить
//           object.key = value;
          
          if(object.key) {
            object.key = value;
          } else {
            object[key] = value;        
          }
      },
        get: function(key) {        
        return object[key]     
      },
          del: function(key) {
          actionsSetDel.push([key, object[key]]);// Отправляем что произошло
          actionsRepeat = []; // обновляем что нужно повторить
        // if (object[key]) {
        //   var value = object[key];
        // }
          delete object[key]; // удаляем ключ      
          console.log(actionsSetDel)      
          console.log(actionsRepeat) 
      },
          undo: function() {
            console.log(actionsSetDel)      
            console.log(actionsRepeat)         
          if (actionsSetDel.length == 0) throw Error();
          let undoOp = actionsSetDel.pop();
          actionsRepeat.push([undoOp[0], object[undoOp[0]]]);
          object[undoOp[0]] = undoOp[1];           
      },
          redo: function() {
          if (actionsRepeat.length == 0) throw Error();
          var redoOp = actionsRepeat.pop();
          actionsSetDel.push([redoOp[0], object[redoOp[0]]]);
          if (redoOp[1] !== undefined) object[redoOp[0]] = redoOp[1];
            else delete object[redoOp[0]];         
          }
      };
  }


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


  var obj = {
    x: 1,
    y: 2
  };

  undoRedo(obj)
  undoRedo(obj).get('x');
  undoRedo(obj).del('y');
  undoRedo(obj).undo();
  undoRedo(obj).get('y');


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


