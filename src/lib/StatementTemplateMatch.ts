import { StatementTemplate } from "./StatementTemplate";
import { StatementTemplateMatcher } from "./StatementTemplateMatcher";

export class StatementTemplateMatch<T> {

    template: StatementTemplate<T>;

    constructor(template: StatementTemplate<T>) {
        this.template = template;           
    }
}