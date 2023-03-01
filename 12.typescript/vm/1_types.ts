// const str: string = 'Hello World!';
// console.log(str);

const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 1000
const float: number = 4.2
const number: number = 2e10
const sms: string = 'hello it'

const numberArray: number[] = [number, number, number, number]
const numberArray2: Array<number> = [number, number, number, number]
const words: string[] = ['it', 'is']

const contact: [string, number] = ['vitalik', number]


// Any
let variable: any = 42
variable = 'string'
variable = []

// ====
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Хайзенберг')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {    
    while (true) {
    }
}

// Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined