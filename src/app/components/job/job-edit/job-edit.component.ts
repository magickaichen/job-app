import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {
  /*
    This component is to edit and update the job description
      - Refactor to only allow the owner to refactor the details
  */
  constructor() { }

  ngOnInit() {
  }

}
