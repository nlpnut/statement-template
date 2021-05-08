# README

```js
const q = require('qact').default;

q.setDefaultAwsRegion('eu-west-1');

...
    const result = await q.callAsync(
        q.lambda('arn:aws:lambda:eu-west-1:123...'),
        {items:[{description:"Hello"}]}
    );
...
```
