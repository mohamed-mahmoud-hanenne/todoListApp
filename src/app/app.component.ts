import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoappComponent } from "./components/todoapp/todoapp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todolist';
}
