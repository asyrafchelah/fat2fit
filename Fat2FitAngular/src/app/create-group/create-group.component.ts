import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Fat2FitService } from '../fat2-fit.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  @Input()
  Name = new FormControl('');
  lists = []
  constructor(private Fat2FitService: Fat2FitService) { }

  
ngOnInit() {
      this.Fat2FitService.lists.subscribe(lists => {
        this.lists = lists
})

}

}
