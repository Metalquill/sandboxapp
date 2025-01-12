import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestarooneyComponent } from './component/testarooney/testarooney.component';
import { UserComponent } from './component/user/user.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestarooneyComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testangularapp';
}
