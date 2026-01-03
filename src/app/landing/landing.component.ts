import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  isMenuOpen = false;
  isScrolled = false;

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle(
      'MedHad – توصيل الأدوية في تونس | Livraison médicaments'
    );

    this.meta.updateTag({
      name: 'description',
      content: 'دواك يوصلك للدار في دقيقة مع MedHad. أول تطبيق تونسي لتوصيل الأدوية. حمل التطبيق و ارتاح.'
    });

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 20;
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
