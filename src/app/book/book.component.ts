import {Component, OnInit, ElementRef, trigger, state, transition, style, animate, Optional} from "@angular/core";
import {ComicService} from "../comic.service";

@Component({
  selector: 'cow-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style(
          {
            opacity: 0,
          }),
        animate("0.3s ease-out", style({
          opacity: 1
        }))
      ]),

    ])
  ]
})
export class BookComponent implements OnInit {



  private pages = [
    "assets/sample/3jours/cover/cover.jpg",
    "assets/sample/3jours/pages/1/1.jpg",
    "assets/sample/3jours/pages/2/2.jpg",
    "assets/sample/3jours/pages/3/3.jpg",
    "assets/sample/3jours/pages/4/4.jpg",
    "assets/sample/3jours/pages/5/5.jpg",
    "assets/sample/3jours/pages/6/6.jpg",
    "assets/sample/3jours/pages/7/7.jpg",
  ]

  private leftPages = [this.pages[0]];
  private rightPages;
  private unfocusedPage

  constructor(@Optional() private book:ComicService) {

  }

  getLeftPageIdx(currentPage){
    return currentPage - (1-currentPage%2);
  }

  getRightPageIdx(currentPage){
    return currentPage + currentPage%2;
  }

  nextPage(){
    let page = this.book.nextPage();

    if (page%2 == 0){
      this.unfocusedPage = 0;
      this.rightPages =[this.pages[this.getRightPageIdx(page)- 1]];
    }else{
      this.unfocusedPage = 1;
      this.leftPages = [this.pages[this.getLeftPageIdx(page)- 1]];
      this.rightPages = null;
    }



  }

  prevPage(){
    let page = this.book.prevPage();
    if (page%2 == 0){
      this.unfocusedPage = 0;
      this.rightPages =[this.pages[this.getRightPageIdx(page)- 1]];
      this.leftPages = [this.pages[this.getLeftPageIdx(page)- 1]];
    }else{
      this.unfocusedPage = 1;
      this.leftPages = [this.pages[this.getLeftPageIdx(page)- 1]];
      this.rightPages = null;
    }
  }

  movePage(event){
    if (event == "ArrowRight"){
      this.nextPage();
    }else if (event == "ArrowLeft"){
      this.prevPage();
    }
  }

  ngOnInit() {
  }

}
