import { Injectable } from '@angular/core';
import { HttpService } from './../http/http.service';
import { FilterService } from './../filter/filter.service';
import { Fertigkeit, JsonToFertigkeit } from './../../classes/fertigkeit';

@Injectable()
export class FertigkeitenService {

    private fertigkeiten: Fertigkeit[] = [];

    constructor(private http: HttpService, private filter: FilterService) {
        this.fetchFertigkeitenFromServer();
    }

    public getAll(): Fertigkeit[] {
        if (this.fertigkeiten == []) {
            this.fetchFertigkeitenFromServer();
        }

        return this.fertigkeiten;
    }

    public getOfType(type: string): Fertigkeit[] {
        return this.filter.filter({ gruppe: type }, this.fertigkeiten) as Fertigkeit[];
    }

    private fetchFertigkeitenFromServer(): void {
        console.log("Fetching Fertigkeiten...");
        this.http.request({
            method: "get",
            url: "/attribute",
            data: {
              typ: "Fertigkeit"
            }
        }).done(response => {
            console.log(response[0]);
            for (let i = 0; i < response.length; i++) {
              this.fertigkeiten.push(JsonToFertigkeit(response[i]));
            }
        }).fail(error => {
            console.log(error);
        }).send();
    }

}
