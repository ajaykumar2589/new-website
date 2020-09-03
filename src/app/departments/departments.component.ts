import { Component, OnInit } from '@angular/core';
import {Course } from '../shared/course';
const Courses: Course[]= [
  {
    id: '0',
    name: 'Computer Science & Engineering ',
    image: '/assets/images/kmitcse.png',
    category: 'mains',
    featured: true,
    label: '(CSE)',
    fee: '$1400',
    // tslint:disable-next-line:max-line-length
    description: 'The Department of Computer Science and Engineering was established in 2007 with an intake of 60 for Under Graduate Program and enhanced to 300 in 2012 and then to 420 in 2014.'
  },
  {
    id: '1',
    name: 'Electronics and communication engineering',
    image: '/assets/images/kmitece.png',
    category: 'appetizer',
    featured: false,
    label: '(ECE)',
    fee: '$1400',
    description: 'The present intake at B Tech is 120.It is one of the most significant branches of engineering which has always been in demand. Our department is known for its efficiency and holds a strong reputation. '
  },
  {
    id: '2',
    name: 'Information technology',
    image: '/assets/images/kmitit.png',
    category: 'appetizer',
    featured: false,
    label: '(IT)',
    fee: '$1400',
    description: 'The Department of IT at Keshav Memorial Institute of Technology was established in the year 2007 with an intake of 120. The Department focuses on preparing the students for wide range of IT careers. The Department of Information Technology has developed state-of-art labs.'
  },
  {
    id: '3',
    name: 'Electronics and Instrumentation Engineering',
    image: '/assets/images/kmiteie.png',
    category: 'dessert',
    featured: false,
    label: '(EIE)',
    fee: '$1400',
    description: ' Electronics and Instrumentation Engineering program was introduced in Keshav Memorial Institute of Technology with a sanctioned intake of 60 students in the academic year 2007 – 08. '
  }
 ];


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  courses:Course[] = Courses;
  selectedCourse = Courses[0];
  constructor() { }

  ngOnInit() {
  }

}