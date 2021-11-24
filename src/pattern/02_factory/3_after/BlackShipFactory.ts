import ShipFactory from "./ShipFactory";
import Ship from "./Ship";
import BlackShip from "./BlackShip";
import DefaultShipFactory from "./DefaultShipFactory";

class BlackShipFactory extends DefaultShipFactory {
  createShip(): Ship {
    return new BlackShip();
  }
}

export default BlackShipFactory;
