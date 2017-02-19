export class Attribut {
    constructor(private id: number, private wikiUrl: string, private name: string, private typ: string) {}

    getId() {
        return this.id;
    }

    getWikiUrl() {
        return this.wikiUrl;
    }

    getName() {
        return this.name;
    }

    getTyp() {
        return this.typ;
    }
}
