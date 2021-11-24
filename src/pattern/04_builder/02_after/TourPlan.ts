import DetailPlan from "./DetailPlan";

class TourPlan {
  private title: string;
  private nights: number;
  private days: number;
  private startDate: Date;
  private whereToStay: string;
  private plans: DetailPlan[];

  constructor(
    title?: string,
    nights?: number,
    days?: number,
    startDate?: Date,
    whereToStay?: string,
    plans?: DetailPlan[]
  ) {
    this.title = title || "";
    this.nights = nights || 0;
    this.days = days || 0;
    this.startDate = startDate || new Date();
    this.whereToStay = whereToStay || "";
    this.plans = plans || [];
  }

  toString() {
    return `TourPlan{
      title=${this.title}, nights=${this.nights}, days=${this.days},
      startDate=${this.startDate}, whereToStay=${this.whereToStay},
      plans=${this.plans}
    }`;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getNights(): number {
    return this.nights;
  }

  public setNights(nights: number): void {
    this.nights = nights;
  }

  public getDays(): number {
    return this.days;
  }

  public setDays(days: number): void {
    this.days = days;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  public getWhereToStay(): string {
    return this.whereToStay;
  }

  public setWhereToStay(whereToStay: string): void {
    this.whereToStay = whereToStay;
  }

  public getPlans(): DetailPlan[] {
    return this.plans;
  }

  public setPlans(plans: DetailPlan[]): void {
    this.plans = plans;
  }

  public addPlan(day: number, plan: string) {
    this.plans.push(new DetailPlan(day, plan));
  }
}

export default TourPlan;
