import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import { EventObject } from 'src/app/homepage/event/event';
import { SurveyOption } from 'src/app/homepage/event/sondage/survey_options';

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) { }

  findAllByGroupId(groupId: number) {
      return this.httpClient.get(`${environment.apiBaseUrl}event/list/` + groupId).toPromise();
  }

  findById(eventId: number) {
    return this.httpClient.get(`${environment.apiBaseUrl}event/` + eventId).toPromise();
  }

  findByUserId(userId: number) {
    return this.httpClient.get(`${environment.apiBaseUrl}event/perso/` + userId).toPromise();
  }

  create(event: EventObject, groupId: number) {
    return this.httpClient.post<EventObject>(`${environment.apiBaseUrl}event/create/` + groupId, event).toPromise();
  }

  voter(surveyOption: SurveyOption) {
    return this.httpClient.post<SurveyOption>(`${environment.apiBaseUrl}voter/`, surveyOption).toPromise();
  }


}

