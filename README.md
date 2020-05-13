
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i>#{DESC}#</i>
    <br>
    <br>
    <img src="https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#/workflows/ci/badge.svg?branch=dev">
    <img src="https://img.shields.io/bundlephobia/minzip/#{REPO_NAME}#">
    <img src="https://img.shields.io/npm/dw/#{REPO_NAME}#">
    <img src="https://img.shields.io/github/commit-activity/w/garronej/#{REPO_NAME}#">
    <img src="https://img.shields.io/npm/l/#{REPO_NAME}#">
</p>
<p align="center">
  <a href="https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#">Home</a>
  -
  <a href="https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#">Documentation</a>
  -
  <a href="https://gitter.im/#{REPO_NAME}#/">Chat</a>
</p>

---

# Install / Import

## Node:

```bash
> npm install --save #{REPO_NAME}#
```
```typescript
import { myFunction, myObject } from '#{REPO_NAME}#'; 
//OR to import a specific file:
import { myFunction } from '#{REPO_NAME}#/myFunction'
import { myObject } from '#{REPO_NAME}#/myObject'
```

## Deno:

For the latest version:   
```typescript
import { myFunction, myObject } from 'https://deno.land/x/#{REPO_NAME}#/mod.ts';
//OR importing specific file: 
import { myFunction } from 'https://deno.land/x/#{REPO_NAME}#/myFunction.ts';
import { myObject } from 'https://deno.land/x/#{REPO_NAME}#/myObject.ts';
```

To import a specific [release](https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#/releases):  

```typescript
import { myFunction, myObject } from 'https://deno.land/x/#{REPO_NAME}#@0.1.0/mod.ts';
//OR
import { myFunction } from 'https://deno.land/x/#{REPO_NAME}#@0.1.0/myFunction.ts';
import { myObject } from 'https://deno.land/x/#{REPO_NAME}#@0.1.0/myObject.ts';
```


## CI

This repository has has continus integration and automatic publishing implemented via GitHub Action. 

Refer to [TEMPLATE_README.md](https://github.com/#{USER_OR_ORG}#/#{REPO_NAME}#/blob/dev/TEMPLATE_README.md) for instructions. 


