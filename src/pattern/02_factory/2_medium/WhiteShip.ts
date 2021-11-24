import Ship from "./Ship";

class WhiteShip extends Ship {
  constructor() {
    super();
    this.setName("whiteship");
    this.setLogo("\uD83D\uDEE5️");
    this.setColor("white");
  }
}

export default WhiteShip;
