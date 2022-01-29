import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../model/event';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event> = this.ar.params.pipe(
    switchMap( params => this.eventService.get(params['id']))
  );

  constructor(
    private eventService: EventService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onUpdate(form: NgForm) : void {
    this.eventService.update(form.value)
  }

}
