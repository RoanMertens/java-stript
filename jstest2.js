
// const _flattenItems = Symbol('flattenItems')
// const _checkType = Symbol('checkType')
// const _filList = Symbol('filList')
// const _list = Symbol()

class FancyList {
  constructor(...input){
    this.list = []
    this.input = input
    this.input = this.flattenItems(this.input)
    this.type = typeof(this.input[0])
    this.checkType(this.input)
    this.filList(this.input)
  }

  // get items
  getItemAt(index) { return this.list[index] }

  getItemsAt(index, numberOfItems){
    return this.list.slice(index, numberOfItems)
  }

  // add items
  addItem(item){
    if(this.type != typeof(item)){
      throw "elements are not all of the same type!";
    }
    this.filList(item)
  }

  addItems(...items){
    items = this.flattenItems(items)
    this.checkType(items)
    this.filList(items)
  }

  // insert items
  insertItemAt(index, item){
    this.list.splice(index, 0, item)
  }

  insertItemsAt(index, ...items){
    items = this.flattenItems(items)
    this.list.splice(index, 0, items)
    this.list = this.flattenItems(this.list)
  }

  // remove items
  removeItemAt(index){
    delete this.list[index]
    this.list = this.flattenItems(this.list)
  }

  removeItemsAt(index, numberOfItems){
    this.list.splice(index, numberOfItems)
  }

  removeItem(item){
    const index = this.list.indexOf(item)
    this.removeItemAt(index)
  }

  removeItems(...items){
    items.forEach(function(item) {
      const index = this.list.indexOf(item)
      this.removeItemAt(index)
    }, this)
  }

  // flattens the arrays
  flattenItems(items) {
    return items.flat()
  }

  // checks the datatype of the input
  checkType(items) {
    items.forEach(function(item) {
      if(this.type != typeof(item)){
        throw "elements are not all of the same type!";
      }
    }, this)
  }

  // adds items to the list
  filList(item) {
    this.list.push(item)
    this.list = this.list.flat()
  }
}

const myList1 = new FancyList([3, 4, 7, 9, 9]);

// myList1.addItems(1, 5, 6)
// console.log(myList1.input)
// console.log(myList1.getItemsAt(0, 8))
// console.log(myList1.input)
// console.log(" ")

// myList1.removeItems(3, 9)
// console.log(myList1.list)

// myList1.removeItemAt(0)
// myList1.removeItem(7)
// console.log(myList1.list)
// console.log(myList1.getItemsAt(0, 2))
// myList1.insertItemsAt(3, [14, 100])
// console.log(myList1.list)













