

Trigger deploy from ci if test passes 
only if push
only if version in package.json and version in master differ.

https://github.com/rgdiascardoso/github-actions-manual-trigger


A template that:
- Will setup itself: Just give your module a name and a description, a bot will push a commit setting everything up for you.
- Automate testing ( with github action ): Every commit pushed will be automatically tested on docker containers against many Node and Deno version, if everything passes you'll get a green label on the readme.
- Publish for you on NPM and Deno.land third party module repository: Each time you'll change the version number in ``package.json`` a workflow that will publish for you on NPM and [deno.land](https://deno.land/x/) will trigger. The CHANGELOG.md will be automatically updated based on commit messages since last release.
- Enable you to only track sources on the main branch: With this template you won't have to track ``dist/`` and ``deno_dist`` on your main branch.
- Enable short import path and path consistency between NPM and Deno: No more ``import 'my_module/dist/lib/theFileNeeded'`` your users will be able to ``import 'my_module/theFileNeeded'``.  


