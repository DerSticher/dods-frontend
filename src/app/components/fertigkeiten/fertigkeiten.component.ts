import { Component, OnInit } from '@angular/core';
import { FertigkeitenService } from './../../services/attributes/fertigkeiten.service';
import { Fertigkeit } from './../../classes/fertigkeit';

@Component({
  selector: 'dods-fertigkeiten',
  templateUrl: './fertigkeiten.component.html',
  styleUrls: ['./fertigkeiten.component.scss'],
  providers: [
      FertigkeitenService
  ]
})
export class FertigkeitenComponent implements OnInit {

    private displayedFertigkeiten: Fertigkeit[];

    private activeFilter = "all";

    constructor(private fertigkeitenService: FertigkeitenService) { }

    ngOnInit() {
        this.displayedFertigkeiten = this.fertigkeitenService.getAll();
    }

    toggleFilter() {
        let filters = ["all", "KOERPER", "GESELLSCHAFT", "NATUR", "WISSEN", "HANDWERK"];
        let oldIndex = filters.indexOf(this.activeFilter);
        let newIndex = (oldIndex + 1 < filters.length) ? oldIndex + 1 : 0;
        this.activeFilter = filters[newIndex];

        if (this.activeFilter == "all") {
            this.displayedFertigkeiten = this.fertigkeitenService.getAll();
        } else {
            this.displayedFertigkeiten = this.fertigkeitenService.getOfType(this.activeFilter);
        }

    }

}
