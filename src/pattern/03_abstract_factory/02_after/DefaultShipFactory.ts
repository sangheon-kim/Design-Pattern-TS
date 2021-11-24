import Ship from "./Ship";
import ShipFactory from "./ShipFactory";

abstract class DefaultShipFactory extends ShipFactory {
  sendEmail(email: string, ship: Ship) {
    console.log(ship.getName() + " 다 만들었습니다.");
  }
}

export default DefaultShipFactory;
