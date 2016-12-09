import {Component, OnInit, ViewChild, AfterViewInit} from "@angular/core";

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
    let bounds = this.wrapper.nativeElement.getBoundingClientRect();
    this.onResize(bounds, this.book.nativeElement);
  }


  onResize(wrapperBounds, bookRef) {

    let width = wrapperBounds.width;
    let height = wrapperBounds.height;
    let scale;


    let bookWidth = bookRef.clientWidth + 20;
    let bookHeight = bookRef.clientHeight+20;



    scale = Math.min(width/bookWidth, height/bookHeight);

    bookRef.style.transform='scale(' + scale + ')';
  }

}
