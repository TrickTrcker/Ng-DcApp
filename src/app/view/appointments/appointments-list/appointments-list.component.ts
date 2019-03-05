import { Component, OnInit, ChangeDetectionStrategy, TemplateRef, ViewChild } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-appointments-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {
  appointmentsType: boolean = false;
  paidStatus: boolean = false;
  stafflist: any = [];
  selectedStaff: any;
  PaymentData: any = [];
  prescriptionitems; any = [];
  treatmentlist: any = [];
  teethItems: any = [];
  selectedTeethItem: any;
  selectedTreatment: any;
  selectedItem: any = [];
  appointment_display: boolean = false;
  isCollapsedAppointmentInfo: boolean = false;
  isCollapsedCaseDetails: boolean = false;
  isCollapsedPrice: boolean = false;
  isDelete: boolean = false;
  isDeleteAppointment: boolean = false;


  // @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '&nbsp;&nbsp;<i class="icon-note icons font-lg mt-0"></i>&nbsp;&nbsp;',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
        this.appointment_display = true;
      }
    },
    {
      label: '<i class="cui-trash icons font-lg mt-0"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
        this.isDelete = true;
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;
  constructor() {
    this.stafflist = [
      { name: 'William Torres', code: '1' },
      { name: 'Adam Smith', code: '2' },
      { name: 'Vivek', code: '3' },
      { name: 'Ravi', code: '4' },
      { name: 'Ram kumar', code: '5' },
      { name: 'Mathi', code: '6' },
      { name: 'Ravi kumar', code: '7' },
    ];
    this.prescriptionitems = [
      { label: 'Azithromycin', value: '1' },
      { label: 'Amoxicillin', value: '2' },
      { label: 'Flagyl', value: '3' }
    ];
    this.teethItems = [
      { label: '36 - ┌ 6', value: '1' },
      { label: '54 - D ┘', value: '2' },
      { label: '53 - C ┘', value: '3' },
      { label: '52 - B ┘', value: '4' }
    ];
    this.treatmentlist = [
      { name: 'Rx Only', code: '1' },
      { name: 'XRay - Bitewing', code: '2' },
      { name: 'Amalgam C II', code: '3' },
      { name: 'Composite C III', code: '4' },
      { name: 'Composite C IV', code: '5' },
      { name: 'XRay - Periapical', code: '6' },
      { name: 'Crowning', code: '7' }
    ];
  }
  // private modal: NgbModal

  ngOnInit() {
  }


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }


  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }


  show_treatmentDetails(doctor) {
    this.appointment_display = true;
  }
}
