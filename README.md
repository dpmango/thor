# THOR HTML/CSS LAYOUT
Based on Gulp starter package to use with PostCss or sass, pug, autoprefixer, compile bootstrap, minify assets and perform other common front-end tasks.

## Demo link
https://dpmango.github.io/thor

## Getting started
__Development:__
- Install node.js and npm
- Run `npm i`
- Run `gulp` (default task)
- Work with `/src` folder and get the processing result in /dist

__Production__
- Run `gulp build`
- Check compiled result in `/dist` folder

## Tasks
- `postcss` - including sass like plugins, autoprefixer, SugarSS
- `sass` - compile .sass and .scss
- `bootstrap` - compile custom bootstrap 4 alpha 5 file
- `pug` - compile pug templates
- `useref` - optimize .css and .js
- `cssnano` - minify css in dest folder
- `images` - imagemin for graphics optimization
- `fonts` - copy fonts to dist folder
- `browserSync` - serve assets with hot reload from `./src` folder
- `clean:dist` - clean dist folder to prevent conflicts before build


### Push command (gh-pages fix)
gulp build && git add . && git commit -m "init" && git push origin master && git subtree push --prefix dist origin gh-pages
