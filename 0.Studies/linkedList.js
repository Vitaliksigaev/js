// -------------- Linked List

class Node { // Обьявляем класс 
    constructor(value) { // значение присваеваем объекту
        this.value = value;
        this.next = null; // слудеющий узел равен 
    }

}

class LinkedList {
    constructor() { // создаем конструктор без параметров
      this.head = null; // нет первого элемента
      this.length = 0; // вспомогательный элемент равен 0 = нет элементов
    }
  
    add(value) { // добавляем элемент
      if (this.length === 0) { // если еще нет элементов
        this.head = new Node(value); // то создаем новый узел
      } else { // или
        let current = this.head; // получаем ссылку на текущий элемент = начало нашего списка
        // двигаемся к последнему узлу
        while(current.next) { // есть ли следующий элемент- если да то 
          current = current.next; // меняем ссылку на следующие элементы пока не дойдем до конца
        }  
        current.next = new Node(value); //Когды мы дошли до конца - добавляем узел
      }  
      this.length++; // увеличиваем счетчик длины
    }
  
    insert(position, value) { // добавляение элемента по конкретной позиции
      if (position < 0 || position > this.length) { // проверяем позицию чтобы мы смогли осуществить присоединение.
        return false;
      }
  
      let node = new Node(value);  // создаем узел 
  
      if (position === 0) { // добавление элемента на самое первое место
        node.next = this.head; // у нашего узла следующая позиция та, которая была до этого в самом начале
        this.head = node; // теперь начало = текущий новый узел
      } else { // доходим до нужной позиции вставки
        let current = this.head; // переменная которая будет проходить по всем элементам пока не дойдем до позиции вставки
        let prev = null; // значение элемента перед узлом
        let index = 0; // счетчик - считает на сколько мы продвинулись по узлам
  
        while (index < position) { // условия пока индекс меньше чем позиция 
          prev = current;// записываем кто был предыдущим элементом или узлом
          current = current.next; // записываем следующий элемент
          index++; // увеличиваем индекс и продолжаем цикл
        } // когда мы дошли до нужной позиции перкращаем изменять предыдущие ссылки
  
        prev.next = node; // следующий узел после PREV будет наш узел который хотим вставить
        node.next = current; //следующий узел после NODE будет current
      }
        this.length++; // увеличиваем счетчик длины
    }
  
    get(position) { // получение элемента по конкретной позиции 
      if (position < 0 || this.length <= position ) {// проверяем позицию что она существует и если позиция больше или ровна длины всего списка
        return;
      }  
      let current = this.head; // переменная которая будет двигатся по нашему списку 
      let index = 0; // переменная индекс 
  
      while (index < position) { //  пока индекс меньше позиции 
        current = current.next; // переходим к очередному элементу 
        index++;// увеличиваем счетчик
      }  
      return current.value; // возвращаем значение по позиции
    }
  
    removeAt(position) { // удаление элементов по ппозиции
      if (position < 0 || position >= this.length) { //проверяем позицию что она существует 
        return null;
      }
  
      let current = this.head; // переменная = первой позиции
  
      if (position === 0) { // удаление самого первого элемента
        this.head = current.next; //перезаписываем первый элемент следующим
      } else { // если не первый элемент
        let prev = null; // ссылка на предыдущий
        let index = 0; // счетчик
  
        while (index < position) { // проходимся по списку до нужного элемента
          prev = current; // обновляем предыдущий
          current = current.next; // обновляем текущий
          index++; // обновляем индекс
        }  

        prev.next = current.next; // обновляем ссылку предыдущего элемента по позиции, на следующий элемент, который идет позле элемента по позиции. 
      }
  
      this.length--; // обновляем значение длины
      return current.value; // выводим значение элемента который удалили
    }
  
    remove(element) { // удаление элемента
      this.removeAt( this.indexOf(element) ); // удаление элемента по позиции/индексу ( возвращаем индекс позиции )
    }
  
    indexOf(element) {
      let current = this.head; // ссылка на текущий элемент
      let index = 0; // индекс
  
      while (current) {
        if (current.value === element) { // если искомый элемент найден возвращаем его индекс
          return index;
        }
  
        current = current.next; // если нет то мы переходиим к следующему элементу и увеличиваем индекс
        index++;
      }
  
      return -1; // если нет 
    }
  
    size() { // размер списка
      return this.length;
    }
  
    isEmpty() { // если пустой список
      return this.length === 0;
    }
  
    print() {
      let current = this.head; // получаем текущий первый элемент
  
      while(current) { // пока элементы есть
        console.log(current.value); // выводим их в консоль
        current = current.next; //переходим к следующему элементу
      }
    }
  }
  //




  console.log('s01e11 - Linked List');
  
  let payload = { a: 4 };
  
  function addItems() {
    console.log('\n  Add Items');
  
    list.add( {a: 1} );
    list.add( {a: 2} );
    list.add( {a: 3} );
    
    list.insert(2, payload);
  
    list.insert(0, {a: 5});
    list.insert(5, {a: 6});
  
    list.print();
  }
  
  function getItems() {
    console.log('\n  Get Items');
  
    console.log('get(4):', list.get(4));
    console.log('get(0):', list.get(0));
    console.log('get(-5):', list.get(-5));
  
    console.log('indexOf {a: 5}:', list.indexOf({a: 5}));
    console.log('indexOf payload:', list.indexOf(payload));
  }
  
  function removeItems() {
    console.log('\n  Remove Items');
  
    console.log('   Before:');
    list.print();
  
    list.remove(payload);
  
    console.log('   After:');
    list.print();
  }
  
  
  let list = new LinkedList();
  
  addItems();
  // getItems();
  // removeItems();