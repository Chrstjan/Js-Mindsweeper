class Tile {
  constructor(clickedClassName) {
    this.element = document.createElement("div");
    this.clickedClassName = clickedClassName;

    this.element.className = "tile";
    document.getElementById("app").appendChild(this.element);

    this.element.addEventListener("click", () => {
      this.callBack();
    })
  }

  callBack() {
    this.element.classList.add(this.clickedClassName);
  }
}

class GreenTile extends Tile {
  constructor() {
    super("green");
    this.value = 1;
  }

  callBack() {
    super.callBack();
    console.log(`Point!: ${this.value}`);
  }
}

class BonusTile extends Tile {
  constructor() {
    super("yellow");
    this.value = 10;
  }

  callBack() {
    super.callBack();
    console.log(`Point!: ${this.value}`);
  }
}
class DeathTile extends Tile {
  constructor() {
    super("red");
  }

  callBack() {
    super.callBack();
    console.log("Damage!!");
  }
}


// const greenTile = new GreenTile();
// const bonusTile = new BonusTile();
// const deathTile = new DeathTile();

const generateTiles = (amount) => {
  
  for (let i = 0; i < amount; i++) {
    let randNum = Math.floor(Math.random() * 100) + 1;
  
    if (randNum <= 90) {
     new GreenTile();
    }
    else if (randNum <= 95) {
      new BonusTile();
    }
    else {
      new DeathTile();
    }
  }
}

generateTiles(30);