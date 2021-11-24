import TourPlan from "./TourPlan";

abstract class TourPlanBuilder {
  abstract title(title: string): TourPlanBuilder;
  abstract nightsAndDays(nights: number, days: number): TourPlanBuilder;
  abstract startDate(localDate: Date): TourPlanBuilder;
  abstract whereToStay(whereToStay: string): TourPlanBuilder;
  abstract addPlan(day: number, plan: string): TourPlanBuilder;
  abstract getPlan(): TourPlan;
}

export default TourPlanBuilder;
