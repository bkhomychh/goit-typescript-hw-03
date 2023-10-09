class Key {
  private signature: string;

  getSignature() {
    return this.signature;
  }

  constructor() {
    this.signature = '№' + Math.random();
  }
}

class Person {
  private key: Key;

  getKey() {
    return this.key;
  }

  constructor(key: Key) {
    this.key = key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('We have a new tenant!');
    } else {
      console.log('The door is locked!');
    }
  }

  abstract openDoor(key: Key): void;

  constructor(protected key: Key) {}
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
      console.log('The door was opened!');
    } else {
      console.log('Wrong key!');
    }
  }

  constructor(key: Key) {
    super(key);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
