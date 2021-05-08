import {StatementTemplateMatcher } from './index';
import { STMResult } from './lib/STMResult';

test ('basic matcher', () => {
    const matcher = new StatementTemplateMatcher<string>();
    matcher.add("new guid", "intent:generate-a-new-guid")

    const result:STMResult<string> = matcher.match("new guid");

    expect(result.matchCount).toBe(1);
    const match = result.matches[0];
    expect(match.template.payload).toBe('intent:generate-a-new-guid');
});


test ('literal capture', () => {
    const matcher = new StatementTemplateMatcher<string>();
    matcher.add("uppercase {literal:string, name:string-1}", "intent:2")

});

test ('name definition', () => {
    const matcher = new StatementTemplateMatcher<string>();
    matcher.add("uppercase {define:order}", "intent:3")

});

test ('name reference', () => {
    const matcher = new StatementTemplateMatcher<string>();
    matcher.add("uppercase {reference:order}", "intent:4")
});
