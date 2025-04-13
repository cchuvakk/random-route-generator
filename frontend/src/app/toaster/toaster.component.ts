import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ToasterService } from './toaster.service';
import { Subscription } from 'rxjs';
import { Toast } from './toaster.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.scss',
  animations:[
    trigger('toastAnimation',[
      transition(':enter',[
        style({transform: 'translateY(100%)', opacity:0}),
        animate('300ms ease-out', style({transform:'translateY(0)', opacity:1}))
      ]),
      transition(':leave',[
        animate('300ms ease-out', style({transform:'translateY(100%)', opacity:0}))
      ])
    ])
  ]
})
export class ToasterComponent implements OnInit, OnDestroy{ 

  private toasterService = inject(ToasterService);

  toasts: Toast[] = [];
  private subscriptions: Subscription | null = null;

  ngOnInit(): void {
    this.subscriptions = this.toasterService.toasts$.subscribe(toasts=>this.toasts = toasts)
  }

  ngOnDestroy(): void {
    if(this.subscriptions){
      this.subscriptions.unsubscribe()
    }
  }

  removeToast(id: number){
    this.toasterService.remove(id)
  }
}
