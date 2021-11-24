import DetailPlan from "./DetailPlan";
import TourPlan from "./TourPlan";
import TourPlanBuilder from "./TourPlanBuilder";

class DefaultTourBUilder implements TourPlanBuilder {
  _plans: DetailPlan[];
  constructor(
    private _title?: string,
    private _nights?: number,
    private _days?: number,
    private _startDate?: Date,
    private _whereToStay?: string
  ) {
    this._plans = [];
  }

  title(title: string): TourPlanBuilder {
    this._title = title;
    return this;
  }
  nightsAndDays(nights: number, days: number): TourPlanBuilder {
    this._nights = nights;
    this._days = days;
    return this;
  }
  startDate(startDate: Date): TourPlanBuilder {
    this._startDate = startDate;
    return this;
  }
  whereToStay(whereToStay: string): TourPlanBuilder {
    this._whereToStay = whereToStay;
    return this;
  }
  addPlan(day: number, plan: string): TourPlanBuilder {
    this._plans.push(new DetailPlan(day, plan));
    return this;
  }
  getPlan(): TourPlan {
    return new TourPlan(
      this._title,
      this._nights,
      this._days,
      this._startDate,
      this._whereToStay,
      this._plans
    );
  }
}

export default DefaultTourBUilder;
