import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-testarooney',
  standalone: true,
  imports: [],
  templateUrl: './testarooney.component.html',
  styleUrl: './testarooney.component.css'
})
export class TestarooneyComponent implements OnInit {

  message: string = "Hello world"
  messageClick = () => {
    console.log('Ive been clicked')
  }

  ngOnInit() {
  }


 

}
