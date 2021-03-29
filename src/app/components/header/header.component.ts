import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    menuItems = [
      {linkId: 1, linkName: 'Home', linkUrl: 'home'},
      {linkId: 2, linkName: 'Adoptar Mascosta', linkUrl: 'adoptar-mascota'},
      {linkId: 3, linkName: 'Quienes Somos', linkUrl: 'quienes-somos'},
      {linkId: 4, linkName: 'Contacto', linkUrl: 'contacto'}
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
