// CLASS  https://www.youtube.com/watch?v=O462BetYst8

// СОЗДАНИЕ КЛАССОВ

//CLASSES IN JS OBJECT LITERALS
function legoMan(name) {
    return {
        name: name,
        say: function(message) {
            console.log(this.name + ': "' + message + '"');
        }
    };
}

var alex = legoMan('Alex');
alex.say('Hello, Kattie!'); // Alex: "Hello, Kattie!"

var kattie = legoMan('Kattie');
kattie.say('No'); // Kattie: "No"
	

//CLASSES IN JS (BAD) FUNCTIONS
function LegoMan(name) {
    this.name = name;
    this.say = function(message) {
        console.log(this.name + ': "' + message + '"');
    }
}
	
var alex = new LegoMan('Alex');
alex.say('Hello, Kattie!'); // Alex: "Hello, Kattie!"

var kattie = new LegoMan('Kattie');
kattie.say('No'); // Kattie: "No"

//CLASSES IN JS (GOOD) FUNCTIONS
function LegoMan(name) {
    this.name = name;
}

LegoMan.prototype.say = function(message) {
    console.log(this.name + ': "' + message + '"');
}

var alex = new LegoMan('Alex');
alex.say('Hello, Kattie!'); // Alex: "Hello, Kattie!"

var kattie = new LegoMan('Kattie');
kattie.say('No'); // Kattie: "No"


//[[Prototype]] - существует у каждого объекта


typeof 132 // "number"
typeof 2.71 // "number"
typeof 'Alex' // "string"
typeof LegoMan // "function"
typeof true // "boolean"
typeof {} // "object""

typeof NaN // "number"
typeof new Number(132) // "object"
typeof [1, 2, 3] // "object", Array.isArray should be used
typeof null // "object"


class LegoMan {
    constructor(name) {
        this.name = name;
    }
}

const alex = new LegoMan('Alex');
alex instanceof LegoMan // true
alex instanceof Object // true


INHERITANCE CROCKFORD WAY

function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype; // optional
}


INHERITANCE ES5 WAY

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype; // optional
}


INHERITANCE ES2015 WAY

class LegoBatMan extends LegoMan {
    constructor(name) {
        super(name);
    }

    say(message) {
        console.log('|\\__/|');
        super.say(message);
        console.log('|\\__/|');
    }
}

//JavaScript Classes & Prototypes / Классы и прототипы в JavaScript.
//https://www.youtube.com/watch?v=QceUxKQeFDA

классы - это шаблон по которому создаются объекты 

class Declaration
class definition
constructor super
private get set
generator 
Static
extend
prototype



//https://www.youtube.com/watch?v=uy_6CeZ6MTU

Содержание / Content:
Принципы ООП.
  Инкапсуляция
  Полиморфизм
  Наследование
Класс. Смысл.
Синтаксис
  Класс - это функция
  Prototype. Повторение.
  Отличие от функции-конструктора
  Классовое выражение / Class expression
  Геттеры и сеттеры
Наследование классов
  Super
Статические свойства и методы
Приватные и защищённые методы и свойства
  Внутренний и внешний интерфейсы
Расширение встроенных классов
Проверка класса: "instanceof"