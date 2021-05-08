export class StatementTemplate<T> {

    pattern: string;
    payload: T;

    constructor(pattern: string, payload: T) {
        this.pattern = pattern;
        this.payload = payload;
    }

}