import Ship from "./Ship";
import ShipFactory from "./ShipFactory";
import WhitePartsProFactory from "./WhitePartsProFactory";
import WhiteShipFactory from "./WhiteShipFactory";
import WhiteShipPartsFactory from "./WhiteShipPartsFactory";

class ShipInventory {
  shipFactory: ShipFactory;
  ship: Ship;
  constructor() {
    this.shipFactory = new WhiteShipFactory(new WhitePartsProFactory());
    this.ship = this.shipFactory.createShip();

    console.log(this.ship.getAnchor().constructor);
    console.log(this.ship.getWheel().constructor);
  }
}
export default ShipInventory;
