import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    group,
    animateChild
  } from '@angular/animations';

export const SlideAnimation = 
trigger('routeAnimations', [
    transition('ContactsPage => DetailPage', [
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', [
        style({ left: '0' })
      ]),
      group([
        query(':leave', [
          animate('0.5s ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('0.5s ease-out', style({ left: '0' }))
        ])
      ])
    ]),
    transition('DetailPage => ContactsPage', [
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', [
        style({ left: '0' })
      ]),
      group([
        query(':leave', [
          animate('0.5s ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('0.5s ease-out', style({ left: '0' }))
        ])
      ])
    ])
  ])