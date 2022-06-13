import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-navbar-schematic',
  templateUrl: './navbar-schematic.component.html',
  styleUrls: ['./navbar-schematic.component.css']
})
export class NavbarSchematicComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Acerca de mí',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      routerLink: 'home',
    },
    {
      label: 'Mis aplicaciones',
      icon: 'code',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true,
      routerLink: 'aplications',
    },
    // {
    //   label: 'Pricing',
    //   icon: 'attach_money',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true,
    //   routerLink: 'login',
    // },
    // {
    //   label: 'Docs',
    //   icon: 'notes',
    //   showOnMobile: false,
    //   showOnTablet: true,
    //   showOnDesktop: true,
    //   routerLink: 'login',
    // },
    // {
    //   label: 'Showcase',
    //   icon: 'slideshow',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true,
    //   routerLink: 'login',
    // },
    // {
    //   label: 'Blog',
    //   icon: 'rss_feed',
    //   showOnMobile: false,
    //   showOnTablet: false,
    //   showOnDesktop: true,
    //   routerLink: 'login',
    // },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
