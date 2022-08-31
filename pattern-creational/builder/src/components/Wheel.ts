export default class Wheel {
    constructor(private _rim: number) {}

    get size(): number {
        return this._rim;
    }

    set size(rim: number) {
        this._rim = rim;
    }
}