import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyPortfolio';
  openPDF() {
    window.open('assets/cv.pdf', '_blank');
  }

  onClickLink(event: MouseEvent): void {
    event.preventDefault();

    const clickedLink = event.target as HTMLElement;
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
  }

  onBodyClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const isLink = clickedElement.matches('.nav__link');

    if (!isLink) {
      const navLinks = document.querySelectorAll('.nav__link');
      navLinks.forEach(link => link.classList.remove('active'));
    }
  }

  // ngOnInit() {
  //   document.body.addEventListener('click', this.onBodyClick);
  // }

  // ngOnDestroy() {
  //   document.body.removeEventListener('click', this.onBodyClick);
  // }
}
