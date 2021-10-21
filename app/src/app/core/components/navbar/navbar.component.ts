import { Menuitem } from './models/menuItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuitem: Menuitem[] = [
    {imgUrl: "/assets/home.png", url: "/"},
    {imgUrl: "/assets/disney.png", url: "/movies"},
    {imgUrl: "/assets/character.png", url: "/character"},
    {imgUrl: "/assets/about.png", url: "/about"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
