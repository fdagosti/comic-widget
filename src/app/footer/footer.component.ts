import {Component, OnInit, Input} from '@angular/core';
import {ComicService} from "../comic.service";

@Component({
  selector: 'cow-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() totalPageNumber;
  @Input() currentPageNumber;

  constructor(private book: ComicService) { }

  ngOnInit() {
    this.totalPageNumber = this.book.getTotalPageNumber();
    this.currentPageNumber = this.book.getCurrentPageNumber();
    this.book.pageChanged.subscribe((page) => {
      this.currentPageNumber = page;
    })
  }

}
