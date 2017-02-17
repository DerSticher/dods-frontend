import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dods-regeln',
  templateUrl: './regeln.component.html',
  styleUrls: ['./regeln.component.scss']
})
export class RegelnComponent implements OnInit {

  private fokusregeln:Array<any> = [
    {checked: false, name:'Alkohol-Regeln', link:'http://www.ulisses-regelwiki.de/index.php/Alkohol_Regeln.html'},
    {checked: false, name:'Gegenstände und Waffen verbergen', link:'http://www.ulisses-regelwiki.de/index.php/Gegenst%C3%A4nde_und_Waffen_verbergen.html'},
    {checked: false, name:'Herstellung', link:'http://www.ulisses-regelwiki.de/index.php/Herstellung.html'},
    {checked: false, name:'Herumfragen', link:'http://www.ulisses-regelwiki.de/index.php/Herumfragen.html'},
    {checked: false, name:'Jagd', link:'http://www.ulisses-regelwiki.de/index.php/160.html'},
    {checked: false, name:'Lernzeiten bei Sprachen', link:'http://www.ulisses-regelwiki.de/index.php/Lernzeitenbeisprachen.html'},
    {checked: false, name:'Nahrungssuche', link:'http://www.ulisses-regelwiki.de/index.php/Nahrungssuche.html'},
    {checked: false, name:'Recherche', link:'http://www.ulisses-regelwiki.de/index.php/Recherche.html'},
    {checked: false, name:'Regeltechnik bei Gegenständen', link:'http://www.ulisses-regelwiki.de/index.php/Regeltechnikgegen.html'},
    {checked: false, name:'Sozialer Konflikt', link:'http://www.ulisses-regelwiki.de/index.php/159.html'},
    {checked: false, name:'Trefferzonen', link:'http://www.ulisses-regelwiki.de/index.php/Trefferzonen.html'},
    {checked: false, name:'Verfolgungsjagden', link:'http://www.ulisses-regelwiki.de/index.php/Verfolgungsjagden.html'},
    {checked: false, name:'Waffen- und Rüstungsbeschädigungen', link:'http://www.ulisses-regelwiki.de/index.php/Beschaedigungen.html'},
    {checked: false, name:'Waffeneigenschaften', link:'http://www.ulisses-regelwiki.de/index.php/Waffeneigenschaften.html'},
    {checked: false, name:'Wesenszüge', link:'http://www.ulisses-regelwiki.de/index.php/wesenszuege.html'}
  ];

  private optionalregeln:Array<any> = [
    {checked: false, name:'Optional 1'},
    {checked: false, name:'Optional 2'},
    {checked: false, name:'Optional 3'},
    {checked: false, name:'Optional 4'},
    {checked: false, name:'Optional 5'}
  ];

  private regelwerke:Array<any> = [
    {checked: true, name:'Regelwerk'},
    {checked: true, name:'Aventurisches Kompendium'},
    {checked: false, name:'Aventurische Magie I'}
  ];

  private quellbuecher:Array<any> = [
    {checked: false, name:'Aventurisches Bestiarium'},
    {checked: false, name:'Aventurischer Almanach'},
    {checked: false, name:'Meisterschirm-Begleitheft'},
    {checked: false, name:'Aventurische Rüstkammer'},
    {checked: false, name:'Aventurische Namen'},
    {checked: false, name:'Rüstkammer der Streitenden Königreiche'}
  ];

  private regionalbaende:Array<any> = [
    {checked: false, name:'Die Streitenden Königreiche'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
