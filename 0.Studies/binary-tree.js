
// дерево ))

class Node {
    constructor(value) {
      this.value = value; // значение в данном узле
      this.left = null; // потомок слевва
      this.right = null; // потомок справа
    }
  }
  
  class BinarySearchTree { //
    constructor() { // создаем деверо
      this.root = null; // корень == 
    }
  
    add(value) { // добавление элементов
      this.root = addWithin(this.root, value); // положи в короень то что вернет функция (поддерево - значение)
  
      function addWithin(node, value) { // рекурсивный метод-
        if (!node) { // условие при котором возвращаем результат
          return new Node(value);
        }
  
        if (node.value === value) { // если такой узел существует
          return node; // возвращаем текущий узел - мы не добавляем одинаковые элементы
        }
  
        if (value < node.value) { // если значение которе хотим добавить меньше значения узла
          node.left = addWithin(node.left, value); // у данного узла левый потомок вернет результат функции - к левому потомку положем новый узел / либо самого себя / либо вызовем функцию
        } else { // значит идем в правое поддерево
          node.right = addWithin(node.right, value); //справа будет то что вернет функция
        }
  
        return node; // вернем текущий узел 
      }
    }
  
    has(value) { // поиск или наличие
      return searchWithin(this.root, value); // поиск с главного дерева / узла + что мы ищем
  
      function searchWithin(node, value) {
        if (!node) { // если пустая позиция
          return false;
        }
  
        if (node.value === value) { // если мы нашли нужное значение
          return true;
        }
  
        return value < node.value ?  // если искомое значение меньше значения в узле
          searchWithin(node.left, value) : // то ищем внутри левого узла
          searchWithin(node.right, value); // то ищемв внутри правого узла
      }
    }
  
    remove(value) {
      this.root = removeNode(this.root, value); // так же используем рекурсию
  
      function removeNode(node, value) {
        if (!node) { // если нет узла оставляем null
          return null;
        }
  
        if (value < node.value) { // Если искомое значение меньше значения в узле
          node.left = removeNode(node.left, value); //перезаписываем значение
          return node;
        } else if (node.value < value) { // Если искомое значение больше
          node.right = removeNode(node.right, value);
          return node;
        } else {
          // equal - should remove this item
          if (!node.left && !node.right) { // Если нет не правого и не левого поддерева // без потомков
            return null;
          }
  
          if (!node.left) { // если нет левого потомка
            // set right child instead of item
            node = node.right;
            return node; // возвращение обновленного узла
          }
  
          if (!node.right) { // если нет правого потомка
            // set left child instead of item
            node = node.left;
            return node;// возвращение обновленного узла
          }
  
          // both children exists for this item
          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.value = minFromRight.value;
  
          node.right = removeNode(node.right, minFromRight.value); // обновление правого поддерева
  
          return node;  // обновление узла
        }
      }
    }
  
    min() { // поиск минимального элемента // минимальный элемент текущего узла будет левее
      if (!this.root) { // наличие узла
        return;
      }
  
      let node = this.root; // переменная для поиска элемента // начинаем с корня
      while (node.left) { // есть ли элемент меньше или левее 
        node = node.left; // доходим до самого маленького - левого элемента
      }
  
      return node.value; // возвращаем самого левого или минимального элемента
    }
  
    max() {  // поиск максимального значение
      if (!this.root) {// наличие узла
        return;
      }
  
      let node = this.root;// переменная для поиска элемента // начинаем с корня
      while (node.right) {
        node = node.right;
      }
  
      return node.value;
    }
  
    leftTraverse(cb) {  //левые обходы 
      doLeft(this.root, cb); // вызываем метод который будем применять на данном узле
  
      function doLeft(node, cb) {
        if (node) { // есть ли вообще узел
          doLeft(node.left, cb); // рекурсивынй метод на левый узел, доходим когда нод лефт = нул
          cb(node.value); // колл бэк с текущим значением 
          doLeft(node.right, cb);          
        }
      }
    }
  
    rightTraverse(cb) { // аналогично как и обход по левому
      doRight(this.root, cb);
  
      function doRight(node, cb) {
        if (node) {
          doRight(node.right, cb);
          cb(node.value);
          doRight(node.left, cb);
        }
      }
    }
  }

console.log('s01e12 - BST (Binary Search Tree)');

function addItems() {
    console.log('\n  Add Items');
    console.log('add 13, 15, 9, 20, 18, 32, 25');

    bst.add(13);
    bst.add(15);
    bst.add(9);
    bst.add(20);
    bst.add(18);
    bst.add(32);
    bst.add(25);


    //  Should get something like this:
    //    13
    //   /  \
    //  9    15
    //        \
    //         20
    //        /  \
    //       18   32
    //           /
    //          25
}

function getItems() {
    console.log('\n  Get Items');

    console.log('has 10', bst.has(10));
    console.log('has 15', bst.has(15));
    console.log('\n', bst);

    console.log('  Left Traverse:');
    bst.leftTraverse((val) => console.log(val));

    console.log('  Right Traverse:');
    bst.rightTraverse((val) => console.log(val)); 

    console.log('min:', bst.min());
    console.log('max:', bst.max());
}

function removeItem() {
    console.log('  Remove Item');

    bst.remove(15);
    console.log('remove 15');
    console.log(bst);

    console.log('  Left Traverse:');
    bst.leftTraverse((val) => console.log(val));
}


const bst = new BinarySearchTree();

addItems();
getItems();