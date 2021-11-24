import BlackShipFactory from "./BlackShipFactory";
import Ship from "./Ship";
import ShipFactory from "./ShipFactory";
import WhiteShipFactory from "./WhiteShipFactory";

class Client {
  constructor() {
    this.print(new WhiteShipFactory(), "whiteship", "ksj8367@gmail.com");
    this.print(new BlackShipFactory(), "blackship", "ksj8367@gmail.com");
  }

  print(shipFactory: ShipFactory, name: string, email: string): void {
    console.log(shipFactory.orderShip(name, email));
  }
}

export default Client;
