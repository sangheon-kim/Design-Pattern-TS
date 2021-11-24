import Anchor from "./Anchor";
import ShipPartsFactory from "./ShipPartsFactory";
import Wheel from "./Wheel";
import WhiteAnchor from "./WhiteAnchor";
import WhiteWheel from "./WhiteWheel";

class WhiteShipPartsFactory implements ShipPartsFactory {
  createAnchor(): Anchor {
    return new WhiteAnchor();
  }
  createWheel(): Wheel {
    return new WhiteWheel();
  }
}

export default WhiteShipPartsFactory;
