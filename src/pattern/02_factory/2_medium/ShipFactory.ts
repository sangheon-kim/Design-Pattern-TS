import Ship from "./Ship";

abstract class ShipFactory {
  ship?: Ship;
  orderShip(name: string, email: string) {
    this.validate(name, email);
    this.prepareFor(name);
    this.ship = this.createShip();
    this.sendEmailTo(email, this.ship);
    return this.ship;
  }

  sendEmailTo(email: string, ship: Ship) {
    console.log(ship.getName() + " 다 만들었습니다.");
  }

  abstract createShip(): Ship;

  validate(name: string, email: string) {
    if (!name) throw new Error("배 이름을 지어주세요");
    if (!email) throw new Error("연락처를 남겨주세요");
  }

  prepareFor(name: string) {
    console.log(`${name} 만들 준비 중`);
  }
}

export default ShipFactory;
