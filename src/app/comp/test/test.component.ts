import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public user = [];

  @Input() public name: string;
  // tslint:disable-next-line: no-output-native
  @Output() public message = new EventEmitter();

  @Output() public diffMess = new EventEmitter();
  public  date = new Date();

  // tslint:disable-next-line: variable-name
  constructor(private _teService: TestService) { }
  // tslint:disable-next-line: typedef
  fireemit(){
      this.message.emit('Hello  coded');
  }
   // tslint:disable-next-line: typedef
   newMessage(){
      this.diffMess.emit('New one');
    }

  ngOnInit(): void {
    this._teService.User().subscribe(data => {
      this.user = data;
    });



  }

}
