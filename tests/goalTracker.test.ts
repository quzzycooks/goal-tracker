import { GoalTracker } from "../src/goalTracker";

describe("GoalTracker", () => {
  let tracker: GoalTracker;

  beforeEach(() => {
    tracker = new GoalTracker();
  });

  test("adds a goal", () => {
    const goal = tracker.addGoal("Read a book");
    expect(goal.title).toBe("Read a book");
    expect(goal.completed).toBe(false);
    expect(tracker.listGoals()).toHaveLength(1);
  });

  test("throws when adding empty goal", () => {
    expect(() => tracker.addGoal("   ")).toThrow("Goal title cannot be empty");
  });

  test("completes a goal", () => {
    const goal = tracker.addGoal("Exercise");
    tracker.completeGoal(goal.id);
    expect(tracker.listGoals()[0].completed).toBe(true);
  });

  test("throws when completing a non-existent goal", () => {
    expect(() => tracker.completeGoal(999)).toThrow("Goal with id 999 not found");
  });

  test("deletes a goal", () => {
    const goal = tracker.addGoal("Temporary goal");
    tracker.deleteGoal(goal.id);
    expect(tracker.listGoals()).toHaveLength(0);
  });

  test("calculates progress correctly", () => {
    const g1 = tracker.addGoal("Goal 1");
    tracker.addGoal("Goal 2");
    tracker.completeGoal(g1.id);

    const progress = tracker.getProgress();
    expect(progress.total).toBe(2);
    expect(progress.completed).toBe(1);
  });
});
