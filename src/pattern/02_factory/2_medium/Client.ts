import BlackShipFactory from "./BlackShipFactory";
import Ship from "./Ship";
import WhiteShipFactory from "./WhiteShipFactory";

class Client {
  whiteShip: Ship;
  blackShip: Ship;
  constructor() {
    this.whiteShip = new WhiteShipFactory().orderShip(
      "whiteship",
      "ksj8367@gmail.com"
    );

    console.log(this.whiteShip);
    this.blackShip = new BlackShipFactory().orderShip(
      "blackShip",
      "ksj8367@gmail.com"
    );

    console.log(this.blackShip);
  }
}

export default Client;
