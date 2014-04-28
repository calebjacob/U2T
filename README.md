U2T
===

Under Two Table's rockin' website!

## Getting Started

First, install all dependencies:
```
npm install
```

To get working, the last thing to do is run Grunt's default task:
```
grunt
```

This will build your JS and Stylus files for the first time and start watching for future changes and automate builds as files change.

## Grunt Tasks

There are two main Grunt tasks that are used depending on whether you're about to deploy to production, or are developing locally: `development` and `production`

### development

This task will concatenate your public JS files, build out your Stylus files, and bust your browser cache on for those files.

### production

This task does everything that `development` does but also uglifies your public JS. Since this uglification process is a hefty one, running this everytime in a local development environment as a file changes would be pretty tedious to wait for.
