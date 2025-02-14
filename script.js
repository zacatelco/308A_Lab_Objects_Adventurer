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
  static MAX_HEALTH = 100;
  
  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }
  
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

// Part 3: Class Features
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Rogue", "Mage"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}. Choose from ${Adventurer.ROLES.join(", ")}`);
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }

  duel(opponent) {
    console.log(`${this.name} is dueling ${opponent.name}...`);
    while (this.health > 50 && opponent.health > 50) {
      const myRoll = this.roll();
      const opponentRoll = opponent.roll();
      
      if (myRoll > opponentRoll) {
        opponent.health -= 1;
        console.log(`${this.name} wins the round! ${opponent.name}'s health is now ${opponent.health}`);
      } else if (opponentRoll > myRoll) {
        this.health -= 1;
        console.log(`${opponent.name} wins the round! ${this.name}'s health is now ${this.health}`);
      } else {
        console.log("It's a tie this round!");
      }
    }

    const winner = this.health > 50 ? this.name : opponent.name;
    console.log(`The winner is ${winner} with health above 50!`);
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  follow() {
    console.log(`${this.name} is loyally following their adventurer.`);
  }
}

// Part 4: Class Uniforms
const robinAdventurer = new Adventurer("Robin", "Fighter");
robinAdventurer.inventory.push("sword", "potion", "artifact");
robinAdventurer.companion = new Companion("Leo", "Cat");
robinAdventurer.companion.companion = new Companion("Frank", "Flea");
robinAdventurer.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robinAdventurer);

const arthurAdventurer = new Adventurer("Arthur", "Mage");
arthurAdventurer.inventory.push("spellbook", "mana potion", "wand");
arthurAdventurer.companion = new Companion("Merlin", "Owl");
arthurAdventurer.companion.companion = new Companion("Nimbus", "Sprite");
arthurAdventurer.companion.companion.inventory = ["tiny staff", "enchanted cloak"];
console.log(arthurAdventurer);

const elenaAdventurer = new Adventurer("Elena", "Rogue");
elenaAdventurer.inventory.push("dagger", "lockpicks", "grappling hook");
elenaAdventurer.companion = new Companion("Shadow", "Fox");
elenaAdventurer.companion.companion = new Companion("Whisper", "Bat");
console.log(elenaAdventurer);

// Part 5: Gather your Party
class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }

  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
    return newAdventurer;
  }

  findByIndex(index) {
    return this.adventurers[index];
  }

  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

const mages = new AdventurerFactory("Mage");
const arthur = mages.generate("Arthur");

const fighters = new AdventurerFactory("Fighter");
const elena = fighters.generate("Elena");

console.log(healers.findByName("Robin"));
console.log(mages.findByIndex(0));

// Part 6: Duel Scenarios
// Duel 1: Fighter (Robin) vs Mage (Arthur)
console.log("\nDuel 1: Fighter vs Mage");
robinAdventurer.duel(arthurAdventurer);

// Duel 2: Mage (Arthur) vs Rogue (Elena)
console.log("\nDuel 2: Mage vs Rogue");
arthurAdventurer.duel(elenaAdventurer);

// Duel 3: Rogue (Elena) vs Fighter (Robin)
console.log("\nDuel 3: Rogue vs Fighter");
elenaAdventurer.duel(robinAdventurer);

