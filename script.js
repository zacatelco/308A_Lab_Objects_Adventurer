// Part 1: Humble Beginnings
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

//From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
console.log(adventurer.inventory[0]);

// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
adventurer.inventory.forEach((item) => {
  console.log(item);
});

// Test this method by calling adventurer.roll() a few times.
adventurer.roll();
adventurer.roll(2);

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// Creating Robin and companions using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Logging Robin's inventory
console.log("Robin's inventory:");
robin.inventory.forEach(item => console.log(item));

// Testing roll method
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
