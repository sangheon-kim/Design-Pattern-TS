import Ship from "./Ship";

class ShipFactory {
  static ship: Ship;
  static orderShip(name: string, email: string) {
    if (!name) throw new Error("배 이름을 지어주세요");
    if (!email) throw new Error("연락처를 남겨주세요");

    ShipFactory.prepareFor(name);

    this.ship = new Ship();
    this.ship.setName(name);

    const whiteShipReg = /^whiteship$/i;

    const ignoreReg = (str: string) => new RegExp(`^${str}$`, "i");

    if (ignoreReg("whiteship").test(name)) {
      this.ship.setLogo("\uD83D\uDEE5️");
    } else if (ignoreReg("blackship").test(name)) {
      this.ship.setLogo("⚓");
    }

    if (ignoreReg("whiteship").test(name)) {
      this.ship.setColor("white");
    } else if (ignoreReg("blackship").test(name)) {
      this.ship.setColor("black");
    }

    ShipFactory.sendEmailTo(email, this.ship);

    return this.ship;
  }

  static prepareFor(name: string) {
    console.log(`${name} 만들 준비 중`);
  }

  static sendEmailTo(email: string, ship: Ship) {
    console.log(ship.getName() + " 다 만들었습니다.");
  }
}

export default ShipFactory;
