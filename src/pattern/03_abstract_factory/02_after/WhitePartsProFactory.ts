import Anchor from "./Anchor";
import ShipPartsFactory from "./ShipPartsFactory";
import Wheel from "./Wheel";
import WhiteAnchorPro from "./WhiteAnchorPro";
import WhiteWheelPro from "./WhiteWheelPro";

class WhitePartsProFactory implements ShipPartsFactory {
  createAnchor(): Anchor {
    return new WhiteAnchorPro();
  }
  createWheel(): Wheel {
    return new WhiteWheelPro();
  }
}

export default WhitePartsProFactory;
