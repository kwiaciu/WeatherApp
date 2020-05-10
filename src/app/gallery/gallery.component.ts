import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  pictures = [
    {
      src:
        'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80',
      alt: 'opis 1',
    },
    {
      src:
        'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      alt: 'opis 2',
    },
    {
      src:
        'https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1278&q=80',
      alt: 'opis 3',
    },
  ];
  currentIndex = 0;

  handleClick(index) {
    this.currentIndex = index;
  }

  handlePrev(index) {
    this.currentIndex = index - 1;
  }

  handleNext(index) {
    this.currentIndex = index + 1;
  }

  constructor() {
    // setInterval(() => {
    //   if (this.currentIndex < this.pictures.length - 1) {
    //     this.currentIndex++;
    //   } else {
    //     this.currentIndex = 0;
    //   }
    // }, 5000);
  }
}
