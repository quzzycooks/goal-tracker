export interface Goal {
  id: number;
  title: string;
  completed: boolean;
}

export class GoalTracker {
  private goals: Goal[] = [];
  private nextId = 1;

  addGoal(title: string): Goal {
    if (!title || title.trim().length === 0) {
      throw new Error("Goal title cannot be empty");
    }
    const goal: Goal = { id: this.nextId++, title: title.trim(), completed: false };
    this.goals.push(goal);
    return goal;
  }

  listGoals(): Goal[] {
    return [...this.goals];
  }

  completeGoal(id: number): Goal {
    const goal = this.goals.find((g) => g.id === id);
    if (!goal) {
      throw new Error(`Goal with id ${id} not found`);
    }
    goal.completed = true;
    return goal;
  }

  deleteGoal(id: number): void {
    const index = this.goals.findIndex((g) => g.id === id);
    if (index === -1) {
      throw new Error(`Goal with id ${id} not found`);
    }
    this.goals.splice(index, 1);
  }

  getProgress(): { total: number; completed: number } {
    const total = this.goals.length;
    const completed = this.goals.filter((g) => g.completed).length;
    return { total, completed };
  }
}
