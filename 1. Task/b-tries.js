class Node {
    constructor(data) {
      this.data = data; // значение в данном узле
      this.left = null; // потомок слевва
      this.right = null; // потомок справа
    }
  }
  
  
  class BinarySearchTree {
    // constructor() { // создаем деверо
    //     this.root = null; // корень == 
    // }
    head = null;
  
  
    root() {
        return this.head;
    }
  
    add(data) { // добавление элементов
        this.root = addWithin(this.root, data); // положи в короень то что вернет функция (поддерево - значение)
    
        function addWithin(node, data) { // рекурсивный метод-
          if (!node) { // условие при котором возвращаем результат
            console.log('koren net')
            return  new Node(data)
          }
    
          if (node.data === data) { // если такой узел существует
            return node; // возвращаем текущий узел - мы не добавляем одинаковые элементы
          }    
          if (data < node.data) { // если значение которе хотим добавить меньше значения узла
            node.left = addWithin(node.left, data); // у данного узла левый потомок вернет результат функции - к левому потомку положем новый узел / либо самого себя / либо вызовем функцию
          } else { // значит идем в правое поддерево
            node.right = addWithin(node.right, data); //справа будет то что вернет функция
          }    
          return node; // вернем текущий узел 
        }
      }
  
  
  
      has(data) { // поиск или наличие
        return searchWithin(this.root, data); // поиск с главного дерева / узла + что мы ищем
    
        function searchWithin(node, data) {
          if (!node) { // если пустая позиция
            return false;
          }
    
          if (node.data === data) { // если мы нашли нужное значение
            return true;
          }
    
          return data < node.data ?  // если искомое значение меньше значения в узле
            searchWithin(node.left, data) : // то ищем внутри левого узла
            searchWithin(node.right, data); // то ищемв внутри правого узла
        }
      }
  
      find(data) { // поиск или наличие
        return searchWithin(this.root, data); // поиск с главного дерева / узла + что мы ищем
    
        function searchWithin(node, data) {
          if (!node) { // если пустая позиция
            return false;
          }
    
          if (node.data === data) { // если мы нашли нужное значение
            return node;
          }
    
          return data < node.data ?  // если искомое значение меньше значения в узле
            searchWithin(node.left, data) : // то ищем внутри левого узла
            searchWithin(node.right, data); // то ищемв внутри правого узла
        }
      }
  
    remove(data) {
        this.root = removeNode(this.root, data); // так же используем рекурсию
    
        function removeNode(node, data) {
          if (!node) { // если нет узла оставляем null
            return null;
          }
    
          if (data < node.data) { // Если искомое значение меньше значения в узле
            node.left = removeNode(node.left, data); //перезаписываем значение
            return node;
          } else if (node.data < data) { // Если искомое значение больше
            node.right = removeNode(node.right, data);
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
            node.data = minFromRight.data;
    
            node.right = removeNode(node.right, minFromRight.data); // обновление правого поддерева
    
            return node;  // обновление узла
          }
        }
      }
  
    min() {
        if (!this.root) { // наличие узла
        return;
        }
  
        let node = this.root; // переменная для поиска элемента // начинаем с корня
        while (node.left) { // есть ли элемент меньше или левее 
            node = node.left; // доходим до самого маленького - левого элемента
        }
        return node.data; // возвращаем самого левого или минимального элемента
    }
  
    max() {
        if (!this.root) {// наличие узла
            return;
          }
      
          let node = this.root;// переменная для поиска элемента // начинаем с корня
          while (node.right) {
            node = node.right;
          }
      
          return node.data;
    }
  }

const tree = new BinarySearchTree();
console.log(tree)

function starTrue (tree) {
    // tree.add(1);
    // tree.add(2);
    // tree.add(3);
    // tree.add(4);
    // tree.add(5);    
    // console.log(tree);    
    // console.log(tree.root)
    // console.log(tree.min()); 
    // console.log(tree.max());
    // tree.remove(5);
    // console.log(tree);  
    // console.log(tree.has(5)); 
    // console.log(tree.max());
    tree.add(2);
    tree.add(3);
    tree.add(4);
    console.log(tree);
    tree.root().data;

}
starTrue (tree)

