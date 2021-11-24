class Ship {
  private name?: string;
  private color?: string;
  private logo?: string;
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
}

export default Ship;
