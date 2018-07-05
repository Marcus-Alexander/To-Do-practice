import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Marcus";
  active = true;
  totalTeams = 4;
  chores = [
      "Mow the Lawn", "Feed the Dog", "Clean the pool", "Water the yard", "Sweep"
  ];
  insideChores = [
      "Make the bed", "Pick up room", "Wash clothes", "Wash dishes", "Clean"
  ]
}
