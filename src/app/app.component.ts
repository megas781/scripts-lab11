import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab11';
  sensors: Sensor[] = [];
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.sensors.push(Sensor.initRandomized());
    }
  }
  deleteSensor(index) {
    console.log(index);
    this.sensors.splice(index, 1);
  }

}

class Sensor {
  public id: number;
  public active: boolean;

  constructor() {
  }
  static init(id, active) {
    const newObj = new Sensor();
    newObj.id = id;
    newObj.active = active;
  }
  static initRandomized(): Sensor {
    const newObj = new Sensor();
    newObj.id = Math.floor(Math.random() * 100);
    newObj.active = Boolean(Math.round(Math.random()));
    return newObj;
  }

}
