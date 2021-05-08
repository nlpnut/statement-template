import { StatementTemplateMatch } from "./StatementTemplateMatch";

export class STMResult<T> {

    matchCount: number;
    matches: StatementTemplateMatch<T>[];

    constructor (matches:StatementTemplateMatch<T>[]) {
        this.matchCount = matches.length;
        this.matches = matches;
    }
}