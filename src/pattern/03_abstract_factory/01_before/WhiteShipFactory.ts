import WhiteShip from "../../02_factory/2.after/WhiteShip";
import DefaultShipFactory from "../../02_factory/2.after/DefaultShipFactory";
import Ship from "../../02_factory/2.after/Ship";

class WhiteShipFactory extends DefaultShipFactory {
  createShip(): Ship {
    const ship = new WhiteShip();

    return ship;
  }
}

export default WhiteShipFactory;
