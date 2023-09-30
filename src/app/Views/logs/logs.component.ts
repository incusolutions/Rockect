import { Component } from '@angular/core';
import { RockectService } from 'src/app/rockect.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {


  constructor(public superApi: RockectService) {}


  
  ngOnInit(): void {

    this.superApi.getLogs();
  
    
  }
}
