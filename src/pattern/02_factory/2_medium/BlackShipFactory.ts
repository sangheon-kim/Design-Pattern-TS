import ShipFactory from "./ShipFactory";
import Ship from "./Ship";
import BlackShip from "./BlackShip";

class BlackShipFactory extends ShipFactory {
  createShip(): Ship {
    return new BlackShip();
  }
}

export default BlackShipFactory;
