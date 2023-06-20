class Unit {
  constructor(name, cost, power, resilience) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }

  attack(target) {
    target.resilience -= this.power;
    console.log(`${this.name} attacks ${target.name} for ${this.power} damage.`);
  }
}

class Effect {
  constructor(name, cost, text, stat, magnitude) {
    this.name = name;
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  play(target) {
    if (this.stat === 'resilience') {
      target.resilience += this.magnitude;
    } else if (this.stat === 'power') {
      target.power += this.magnitude;
    }
    console.log(`${this.name} is played on ${target.name}. ${this.text}`);
  }
}

// Create instances of units
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Create instances of effects
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Play the scenario
redBeltNinja.attack(blackBeltNinja);
hardAlgorithm.play(redBeltNinja);
blackBeltNinja.attack(redBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);



//  FIRST I WROTE THE CODE BYE MYSELF AND AFTER I DO IT THIS ASSIMENT  WITH THE HELP OH MOHAMED AND ALI
