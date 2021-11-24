import Ship from "./Ship";

class BlackShip extends Ship {
  constructor() {
    super();
    this.setName("blackship");
    this.setColor("black");
    this.setLogo("⚓");
  }
}

export default BlackShip;
