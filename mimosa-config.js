exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "less",
    "autoprefixer"
  ],
  "server": {
    "views": {
      "compileWith": "html",
      "extension": "html"
    }
  }
}
