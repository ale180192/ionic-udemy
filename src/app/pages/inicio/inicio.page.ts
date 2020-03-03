import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      name: 'Action Sheet',
      icon: 'heart-half',
      redirectTo: '/action-sheet'
    },
    {
      name: 'Alert',
      icon: 'alert',
      redirectTo: '/action-sheet'
    },
    {
      name: 'social1',
      icon: 'alert',
      redirectTo: '/social'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  name: string;
  redirectTo: string;
  icon: string;
}
