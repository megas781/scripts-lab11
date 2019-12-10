import { Component } from '@angular/core';
import {LifecycleHooks} from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab11';
  sensors: Sensor[] = [];
  modalView: HTMLElement;

  newSensorId: string;



  isNewSensorActive: boolean;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.sensors.push(Sensor.initRandomized());
    }
  }
  ngAfterViewInit() {
    this.modalView = document.querySelector('.add-sensor-modal');
  }

  deleteSensor(index) {
    console.log(index);
    this.sensors.splice(index, 1);
  }

  public showModal() {
    this.modalView.classList.remove('hidden');
    (this.modalView.querySelector('input[name=newSensorId]') as HTMLElement).focus();
  }
  public addSensorWithModal() {
    const newSensor = Sensor.init(this.newSensorId, this.isNewSensorActive);
    this.sensors.push(newSensor);
    this.hideModal();
  }
  private hideModal() {
    this.modalView.classList.add('hidden');
    this.newSensorId = '';
    this.isNewSensorActive = false;
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
    return newObj;
  }
  static initRandomized(): Sensor {
    const newObj = new Sensor();
    newObj.id = Math.floor(Math.random() * 100);
    newObj.active = Boolean(Math.round(Math.random()));
    return newObj;
  }

}
