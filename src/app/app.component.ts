import { Component } from '@angular/core';

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
