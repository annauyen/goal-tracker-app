import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
 isOpen = true;
  isMobile = false;

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  toggleSidebar(): void {
    if (this.isMobile) {
      this.isOpen = !this.isOpen;
    }
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth < 992; // Match Bootstrap 'lg' breakpoint
    if (!this.isMobile) {
      this.isOpen = true; // Always open on desktop
    }
  }
}
