import { GoalTracker } from "./goalTracker";

const tracker = new GoalTracker();

tracker.addGoal("Learn Git");
tracker.addGoal("Learn GitHub Actions");
tracker.completeGoal(1);

console.log("Goals:", tracker.listGoals());
console.log("Progress:", tracker.getProgress());
