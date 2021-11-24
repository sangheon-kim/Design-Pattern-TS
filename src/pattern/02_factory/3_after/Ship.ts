class Ship {
  private name?: string;
  private color?: string;
  private logo?: string;
  private wheel?: string;
  private anchor?: string;
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

  getWheel(): string {
    return this.wheel || "";
  }

  setWheel(wheel: string): void {
    this.wheel = wheel;
  }

  getAnchor(): string {
    return this.anchor || "";
  }

  setAnchor(anchor: string): void {
    this.anchor = anchor;
  }
}

export default Ship;
