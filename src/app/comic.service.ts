import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ComicService {

  pageChanged:EventEmitter<any> = new EventEmitter();

  constructor() {
    this.currentPage = 1;
  }

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

  private leftPageIdx=0;
  private rightPageIdx=1;
  private currentPage = 1;
  private leftPages = [this.pages[this.leftPageIdx]];
  private rightPages =[this.pages[this.rightPageIdx]];

  nextPage(){
    if (this.currentPage < this.pages.length){
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
    return this.currentPage;
  }
  prevPage(){
    if (this.currentPage > 1){
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
    return this.currentPage;
  }

  getCurrentPageNumber(){
    return this.currentPage;
  }

  getTotalPageNumber(){
    return this.pages.length;
  }

}
