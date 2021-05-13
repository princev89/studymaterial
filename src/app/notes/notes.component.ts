import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NotesService} from '../notes.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  data = <any>{};



  constructor(private notes:NotesService) { }

  ngOnInit(): void {
    this.notes.getData().subscribe(value=>{
      console.warn(value);
      this.data = value;
      
    })
  }

}
