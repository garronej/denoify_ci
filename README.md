
<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/82036935-c52a3480-96a1-11ea-9794-e982a23e5612.png">  
</p>
<p align="center">
    <i> A template to assist you in creating and publishing modules that will run everywhere: node, deno and browsers.  </i>
    <br>
    <br>
</p>

---

# Presentation 

This template automate the boring and tedious tasks of:
- Filling up the ``package.json``
- Setting up Typescript and [Denoify](https://github.com/garronej/denoify).
- Writing a [README.md](https://github.com/garronej/denoify_ci/blob/dev/README.template.md) with decent presentation and instructions on how to install/import your module.
- Testing on multiples ``Node`` and ``Deno`` version before publishing.
- Maintaining a CHANGELOG
- Publishing on NPM and [deno.land/x](https://deno.land/x)

Good stuffs that come with using this template:
- No source file are tracked on the default branch .
- Shorter specific file import path.  
  ``import {...} from "my_module/theFile"`` instead of the usual
  ``import {...} from "my_module/dist/theFile"`` 
- CDN distribution for importing from an ``.html`` file with a ``<script>`` tag.

# Disclaimer 

[Denoify](https://github.com/garronej/denoify), the build tool that enable to support Deno is still
very new, depending on what you have in mind it might require a lot of extra work to get your code 
to comply with the requirements it sets.  
If you are interested by the automation that this template features but don't care bout Deno support use [ts_ci](https://github.com/garronej/ts_ci) this repo.

# How to use

## Fork it ( click use the template )

- Click on *Use this template*
- The repo name you will chose will be used as module name for NPM and [deno.land/x](https://deno.land/x) so:
  - Make sure to use lodash ( ``_`` ) instead of ( ``-`` )
  - Check if the module name is available on NPM.
  - Check if the module name is available on [deno.land/x](https://deno.land/x)
- The description you provide will be the one used on NPM and deno.land ( you can change it later )

Once you've done that a GitHub action workflow will setup the ``README.md`` and the ``package.json`` for you, wait a couple of minute for it to compleat ( a bot will push ). You can follow it's advancement in the "Action" tab.

Each time you will push changes ``npm test`` will be run on remote docker containers against multiple Node and Deno versions, if everything passes you will get a green ``ci`` badges on your readme.

## Enable automatic publishing.

Once you are ready to make your package available on NPM and deno.land/x you 
will need to provide two token so that the workflow can publish on your behalf:

Go to repository ``Settings`` tab, then ``Secrets`` you will need to add two new secrets:
- ``NPM_TOKEN``, you NPM authorization token.
- ``PAT``, GitHub **P**ersonal **A**ccess **T**oken with the **repo** authorization. [link](https://github.com/settings/tokens)

To trigger publishing edit the ``package.json`` ``version`` field ( ``0.0.0``-> ``0.0.1`` for example) then push changes... that's all !
The publishing will actually be performed only if ``npm test`` passes to avoid oopsies.  

The first time the module is published a pull request that adds your repo to the deno.land/x database will be created on your behalf [here](https://github.com/denoland/deno_website2/pulls). Be mindful that every module needs to be approved by a deno maintainer, usually Ryan Dahl himself, so think twice before making the move.

# Customizations: 

## Changing the directory structures.

All your sources files must remain inside the ``src`` dir, you can change how things are organized
but don't forget to update your ``package.json`` ``main``, ``type`` and ``files`` field when appropriate!

## Swipe the image in README.md

A good way to host your repo image is to open an issue named ASSET in your project, close it, create a comment, drag and drop the picture you want to use and that's it. You have a link that you can replace in the README.md.  
While you are at it submit this image as *social preview* in your repos github page's settings so that when you share on
Tweeter or Reddit you don't get your GitHub profile picture to shows up.

## Disable CDN build 

If your project does not target the browser or if you are not interested in offering CDN distribution:

- Remove all ``cdn:*`` npm scripts and ``npm run cdn`` from the `build` script ( in ``package.json`` ).
- Remove ``./tsconfig.esm.json``
- Remove ``/dist/esm/`` entry from ``files`` in ``package.json`` 
- Remove ``simplifyify`` and ``terser`` from dev dependencies.

## Remove unwanted dev dependencies.

Dev dependencies that are not required by the template, ( you can safely remove them, if you don't use them ):

- ``evt``
- ``@types/node``

Must keep: 

- ``typescript``
- ``denoify``
- ``simplifyify`` ( for CDN build )
- ``terser`` ( for CDN build )


# WARNINGS:

- The template does not support ``.npmignore`` use ``package.json`` ``files`` instead.
- The template does not support ``.npmrc``

The drawback of having short import path is that the dir structure  
is not exactly the same in production ( in the npm bundle ) and in development.

The files and directories in ``dist/`` will be moved to the root of the project.  

As a result this won't work in production: 

``src/index.ts``
```typescript
import * as fs from "fs";
import * as path from "path";

const str = fs.readFileSync(
    path.join(__filename,"..", "package.json")
).toString("utf8");
```

Because ``/dist/index.js`` will be moved to ``/index.js``

You'll have to do: 

``src/index.ts``
```typescript
import * as fs from "fs";
import * as path from "path";
import { getProjectRoot } from "./tools/getProjectRoot";

const str = fs.readFileSync(
    path.join(getProjectRoot(),"package.json")
).toString("utf8");
```

