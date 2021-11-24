import WhiteShip from "./WhiteShip";
import DefaultShipFactory from "./DefaultShipFactory";
import Ship from "./Ship";
import ShipPartsFactory from "./ShipPartsFactory";

class WhiteShipFactory extends DefaultShipFactory {
  shipPartsFactory: ShipPartsFactory;
  constructor(shipPartsFactory: ShipPartsFactory) {
    super();
    this.shipPartsFactory = shipPartsFactory;
  }

  createShip(): Ship {
    const ship = new WhiteShip();
    ship.setAnchor(this.shipPartsFactory.createAnchor());
    ship.setWheel(this.shipPartsFactory.createWheel());
    return ship;
  }
}

export default WhiteShipFactory;
