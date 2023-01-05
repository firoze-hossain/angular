export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("active to inactive counter: "+this.activeToInactiveCounter);
  }
  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("inactive to active counter: "+this.inactiveToActiveCounter);
  }
}
