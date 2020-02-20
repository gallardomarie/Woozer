import {Component, OnInit} from '@angular/core';
import { EventService } from 'src/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../groupe/group';
import { GroupService } from 'src/services/group.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    providers: [EventService]
})
export class EventListComponent implements OnInit {

    private listEvent;
    groupId: string;

    constructor(
        private eventService: EventService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.groupId = this.router.url[this.router.url.length-1];
        this.eventService.findAllByGroupId(+this.groupId).then(events => {
            this.listEvent = events;
        });          
    }

    openDetailsEvent(eventId) {
        this.router.navigate(['/woozer/event/details'], {queryParams: {eventId: eventId}});
    }
}
