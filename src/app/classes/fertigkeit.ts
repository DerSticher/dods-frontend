import { Attribut } from './attribut';

export class Fertigkeit extends Attribut {
    public checked: boolean = false;

    constructor(id: number, wikiUrl: string, name: string, typ: string,
        private gruppe: string, private kostentabelle: string, private probe: any,
        private publikationen: any) {
        super(id, wikiUrl, name, typ);
    }
}

export function JsonToFertigkeit(json: any): Fertigkeit {
    let keys = ["id", "wikiUrl", "name", "typ", "gruppe", "kostentabelle", "probe", "publikationen"];
    let validJson = true;

    for (var i = 0; i < keys.length; ++i) {
        if (!(keys[i] in json)) {
            validJson = false;
            console.log(keys[i] + " not found in json object");
        }
    }

    if (!validJson) {
        return null;
    }

    return new Fertigkeit(json.id, json.wikiUrl, json.name, json.typ,
        json.gruppe, json.kostentabelle, json.probe, json.publikationen);
}