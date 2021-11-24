import ShipFactory from "./ShipFactory";
import Ship from "./Ship";
import WhiteShip from "./WhiteShip";

class WhiteShipFactory extends ShipFactory {
  createShip(): Ship {
    return new WhiteShip();
  }
}

export default WhiteShipFactory;
