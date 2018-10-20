import { Component, OnInit } from '@angular/core';
export interface User {
  email: string;
  name: string;
}

interface Award {
  image: string;
  title: string;
  subTitle?:string;
}
@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.scss']
})
export class GiveFeedbackComponent implements OnInit {
  users: User[] = [
    {email: 'john@oracle.com', name: 'john Doe'},
    {email: 'rachel@oracle.com', name: 'Rachel'},
    {email: 'mon@oracle.com', name: 'Monica'}
  ];

  awards: Award[] = [
    {image:'https://picsum.photos/200/300/?random', title:'Thanks', subTitle:'Inspiring work!'},
    {image:'https://picsum.photos/200/300/?random', title:'Great works', subTitle:'Inspiring work!'},
    {image:'https://picsum.photos/200/300/?random', title:'Amazing presentation', subTitle:'Inspiring work!'},
    {image:'https://picsum.photos/200/300/?random', title:'Great leadership', subTitle:'Inspiring work!'},
    {image:'https://picsum.photos/200/300/?random', title:'Great performance', subTitle:'Inspiring work!'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
