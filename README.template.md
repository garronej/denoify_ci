
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>#{DESC}#</i>
    <br>
    <br>
    <img src="https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#/workflows/ci/badge.svg?branch=develop">
    <img src="https://img.shields.io/bundlephobia/minzip/#{REPO_NAME}#">
    <img src="https://img.shields.io/npm/dw/#{REPO_NAME}#">
    <img src="https://img.shields.io/npm/l/#{REPO_NAME}#">
</p>

- [Home](https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#)
- [Documentation](https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#)



# Install / Import

``#{REPO_NAME}#`` is both a [Deno](https://deno.land/x/#{REPO_NAME}#) and an [NPM](https://www.npmjs.com/#{REPO_NAME}#) module.

## Node:

```bash
$ npm install --save #{REPO_NAME}#
```
```typescript
import { myFunction, myObject } from '#{REPO_NAME}#'; 
```

Specific import

```typescript
import { myFunction } from '#{REPO_NAME}#/myFunction';
import { myObject } from '#{REPO_NAME}#/myObject';
```

## Deno:

For the latest version:   
```typescript
import { myFunction, myObject } from 'https://deno.land/x/#{REPO_NAME}#/mod.ts';
```

To import a specific [release](https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#/releases):  

```typescript
import { myFunction, myObject } from 'https://deno.land/x/#{REPO_NAME}#@0.1.0/mod.ts';
```

Specific imports:  

```typescript
import { myFunction } from 'https://deno.land/x/#{REPO_NAME}#/myFunction.ts';
import { myObject } from 'https://deno.land/x/#{REPO_NAME}#/myObject.ts';
```

## Import from HTML, with CDN

Import it via a bundle that creates a global ( wider browser support ):  

```html
<script src="//unpkg.com/#{REPO_NAME}#/bundle.min.js"></script>
<script>
  const { myFunction, myObject } = #{REPO_NAME}#;
</script>
```

Or import it as an ES module:  

```html
<script type="module">
  import { myFunction, myObject } from '//unpkg.com/#{REPO_NAME}#/zz_esm/index.js';
</script>
```

*You can specify the version you wish to import: * [unpkg.com](https://unpkg.com)

## Contribute

```bash
npm install
npm run build
npm test
```
