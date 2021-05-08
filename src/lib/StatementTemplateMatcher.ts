import { StatementTemplate } from "./StatementTemplate";
import { StatementTemplateMatch } from "./StatementTemplateMatch";
import { STMResult } from "./STMResult";

export class StatementTemplateMatcher<T> {

    private templates: StatementTemplate<T>[] = [];

    add(pattern: string, payload: T) {
        const template = new StatementTemplate<T>(pattern, payload);

        this.templates.push(template);
    }

    public match(input :string) :STMResult<T> {
        const matches: StatementTemplateMatch<T>[] = [];

        this.templates.forEach(template => {
            if (template.pattern == input) {
                const match = new StatementTemplateMatch<T>(template);
                matches.push(match);
            }
        });
        
        return new STMResult<T>(matches);
    }

}