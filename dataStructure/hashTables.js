//------------------------------------------------------
// HASH TABLES
//------------------------------------------------------
// - used to store key-values pairs
// - fast for all operations (find / add / remove values)
// To implement a hash table - use ARRAY

// JS - use Objects & Maps
// JAVA - use Maps

//------------------------------------------------------
// BIG O
//------------------------------------------------------
// - Insert - O(1)
// - Delete - O(1)
// - Access - O(1)

// worst case - O(n)

// ---------------------
// Dealing w Collisions
// ---------------------
// 1. Separate Chaining
//    -> at each index in the array, store the values in array or linked list
//        -> allow us to store multiple key-value pairs at same index

// 2. Linear Probing
//    -> when we find a collision, search thru the array to find the next empty slot
//       -> allow us to store a single key-value at each index

//------------------------------------------------------
// HASH TABLE SET AND GET
//------------------------------------------------------
// SET
// 1. accept a key and a value
// 2. hash the key
// 3. store key-value pair in the hash table array via separate chaining

// GET
// 1. accept a key
// 2. hash the key
// 3. retrieve key-value pair in the hash table
// 4. if key is not found, return undefined

//------------------------------------------------------
// KEYS & VALUES
//------------------------------------------------------
// KEYS: loops thru the hash table array & returns an array of keys in the table
// VALUES: loop thru the hash table array & returns an array of values in the table

class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      let valuesArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon","#800000")
  ht.set("yellow","#FFFF00")
  ht.set("olive","#808000")
  ht.set("salmon","#FA8072")
  ht.set("lightcoral","#F08080")
  ht.set("mediumvioletred","#C71585")
  ht.set("plum","#DDA0DD")
  ht.set("purple","#DDA0DD")
  ht.set("violet","#DDA0DD")
  
  
  ht.keys().forEach(function(key){
    console.log(ht.get(key));
  })