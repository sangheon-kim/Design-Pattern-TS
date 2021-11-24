import Anchor from "./Anchor";
import Wheel from "./Wheel";

/** 추상 팩토리 */
abstract class ShipPartsFactory {
  abstract createAnchor(): Anchor;
  abstract createWheel(): Wheel;
}

export default ShipPartsFactory;
