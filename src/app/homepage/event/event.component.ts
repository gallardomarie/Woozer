import {Component, OnInit} from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
    providers: [EventService]
})
export class EventComponent implements OnInit {

    private listEvent;

    constructor(
        private eventService: EventService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        /** TODO : importer l'id du group pour récupérer ses events */
        this.activatedRoute.queryParams.subscribe(
            params => {
                this.eventService.findAllByGroupId(+params.groupId).then(events => {
                    this.listEvent = events;
                });
            }
        );
    }
}
