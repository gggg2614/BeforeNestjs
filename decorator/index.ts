//类装饰器
// const doc: ClassDecorator = (target: any) => {
//     console.log(target)
//     target.prototype.name = 'test'
// }

// @doc
// class test {
//     constructor() {

//     }
// }
// // doc(test)
// const t1: any = new test()
// console.log(t1.name)

// 属性装饰器
// const doc: PropertyDecorator = (target: any, key: string | symbol) => {
//     console.log(target, key)
// }

// class test {
//     @doc
//     public name: string
//     constructor() {
//         this.name = '121233'
//     }
// }

// 方法装饰器、参数
const doc: ParameterDecorator = (target: any, key: string | symbol, descriptor: any) => {
    console.log(target, key, descriptor)
}

class test {
    public name: string
    constructor() {
        this.name = '121233'
    }
    getName(name:string,@doc age:number) {

    }
}
