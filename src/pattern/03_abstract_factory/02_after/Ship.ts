import Anchor from "./Anchor";
import Wheel from "./Wheel";

class Ship {
  private name?: string;
  private color?: string;
  private logo?: string;
  private wheel?: Wheel;
  private anchor?: Anchor;
  constructor() {}

  getName(): string {
    return this.name || "";
  }

  setName(name: string) {
    this.name = name;
  }

  getColor(): string {
    return this.color || "";
  }

  setColor(color: string): void {
    this.color = color;
  }

  getLogo(): string {
    return this.logo || "";
  }

  setLogo(logo: string): void {
    this.logo = logo;
  }

  toString(): string {
    return `Ship{name=${this.name}, color=${this.color}, logo=${this.logo}}`;
  }

  getWheel(): Wheel {
    return this.wheel || {};
  }

  setWheel(wheel: Wheel): void {
    this.wheel = wheel;
  }

  getAnchor(): Anchor {
    return this.anchor || {};
  }

  setAnchor(anchor: Anchor): void {
    this.anchor = anchor;
  }
}

export default Ship;
