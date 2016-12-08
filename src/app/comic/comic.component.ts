import {
  Component, OnInit, ElementRef, HostListener, ViewChildren, QueryList, AfterViewChecked,
  ViewChild, AfterViewInit
} from '@angular/core';
import {BookComponent} from "../book/book.component";

@Component({
  selector: 'cow-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit, AfterViewInit{

  @ViewChild("book") book;
  @ViewChild("wrapper") wrapper;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log("BOOK ",this.book);
    let bounds = this.wrapper.nativeElement.getBoundingClientRect();
    this.onResize(bounds, this.book.nativeElement);
  }


  onResize(wrapperBounds, bookRef) {

    let width = wrapperBounds.width;
    let height = wrapperBounds.height;
    let scale;


    let maxWidth = bookRef.clientWidth + 20;
    let maxHeight = bookRef.clientHeight+20;


    // early exit
    if(width >= maxWidth && height >= maxHeight) {
      bookRef.style.transform="";
      return;
    }

    scale = Math.min(width/maxWidth, height/maxHeight);

    // console.log("WINDOW RESIZE ",width, height, maxWidth, maxHeight);
    // console.log("SCALE ",scale);
    bookRef.style.transform='scale(' + scale + ')';
  }

}
