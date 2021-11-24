class DetailPlan {
  constructor(private day: number, private plan: string) {
    // 어짜피 무조건 받아야하니깐 매개변수에 접근선택자 명시해주면 자동초기화
  }

  public getDay(): number {
    return this.day;
  }

  public setDay(day: number): void {
    this.day = day;
  }

  public getPlan(): string {
    return this.plan;
  }

  public setPlan(plan: string): void {
    this.plan = plan;
  }

  toString(): string {
    return `DetailPlan{
      day=${this.day}, plan=${this.plan}
    }`;
  }
}

export default DetailPlan;
