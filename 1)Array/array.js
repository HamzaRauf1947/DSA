class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;

    }
    get(index){
        return this.data[index]
    }
    pop(){
       let lastItem =  this.data[this.length-1]
       delete this.data[this.length-1];
       this.length--;
       return lastItem;
       
    }
    shift(){
        let fisrtItem = this.data[0];
        for (let i = 0; i < this.length-1; i++) {
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length-1];
        this.length--;
        return fisrtItem;
       
    }

    deleteByIndex(index){
        let deletedItem =  this.data[index];

        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1]
        this.length--;
        return deletedItem
   
    }
}

const myNewArray = new MyArray();
myNewArray.push("ONE")
myNewArray.push("Two")
myNewArray.push("Three")
myNewArray.push("Four")



console.log(myNewArray.deleteByIndex(0));
console.log(myNewArray);

