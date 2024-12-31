import { Component } from '@angular/core';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';
   activeTab: string = 'tab1';

  // Method to handle tab switching
  setActiveTab(tab: string): void {
    this.activeTab = tab;
}
