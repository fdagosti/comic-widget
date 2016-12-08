import {Component, OnInit, HostListener, ElementRef, AfterContentInit, ViewChildren, QueryList} from '@angular/core';
import {ComicComponent} from "../comic/comic.component";

@Component({
  selector: 'cow-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, AfterContentInit {



  constructor(private elementRef:ElementRef) {
    console.log("creation of BookComponent ",elementRef);
  }

  ngAfterContentInit(){
    console.log("After content Init ",this.elementRef);
  }


  ngOnInit() {
  }

}
