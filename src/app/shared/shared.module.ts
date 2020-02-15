import {NgModule} from '@angular/core';
import {ButtonComponent} from './button/button.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import {AutoCompleteModule} from 'ionic4-auto-complete';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        AutoCompleteModule
    ],
    declarations: [
        ButtonComponent,
        TopbarComponent,
        FooterComponent,
        CalendarComponent
    ],
    exports: [
        ButtonComponent,
        TopbarComponent,
        FooterComponent,
        CalendarComponent
    ]
})
export class SharedModule {}
