# Never Meant Source Code
Hi. Here's the source code for my blog.

# Using Docker:
- Install a node image
- Create a container: `docker run -dit -p 3000:3000 --name personal_node_debian -v /Users/alex/workspace/:/shared/:z <image id>`
- Start it again with "docker container start <container id> "

## Running
- Install yarn
- `yarn dev` to run locally


## Deploying
- yarn generate
- yarn deploy

## Todo
- Add Comments
- Improve styles, readability
- Abandon Vuetify
  - The style is nice, but it's introduced way, way too many problems.
  - I've needed to make the changes to node_moduls files until this PR gets merged: https://github.com/nuxt-community/vuetify-module/pull/393/files
  - Why does strikethrough syntax no longer work? I.e. ~~?
  - Others