import Ship from "./Ship";
import ShipFactory from "./ShipFactory";

class Client {
  whiteShip: Ship;
  blackShip: Ship;
  constructor() {
    this.whiteShip = ShipFactory.orderShip("whiteship", "ksj8367@gmail.com");
    console.log(this.whiteShip);

    this.blackShip = ShipFactory.orderShip("BlackShip", "ksj8367@gmail.com");
    console.log(this.blackShip);
  }
}

export default Client;
