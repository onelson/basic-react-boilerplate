# basic-react-boilerplate (redux edition)

This version of the basic-react-boilerplate adds redux into the mix.
If you don't want redux, head on back over to the
[master](https://github.com/onelson/basic-react-boilerplate/tree/master)
branch.

This starts with the most straightforward setup, with a single actions, and 
and reducers module (one of each). Naturally, as your application grows, you
will likely want to split these up into logical groups, but to start I'm just 
using singles.

The redux store will be enhanced with the 
[Chrome Redux Devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
enhancer if installed _and_ `NODE_ENV` is `development`.

Run `npm run build` to compile a dist.
Compile results are deposited in `./dist`.

Run `npm run start` for the local dev server.

By default, the dev server will bind to port `8080`, so to view the app 
in your browser just enter http://localhost:8080 in your address bar.

If you need to pass extra flags to the dev server, to customize host/port for
example, you can add them like this:

`npm run start -- <extra flags here>`

Here's the cli reference for the dev server: 
https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli

While this project can run in isolation, the "dynamic" page expects to be able
to be able to talk to this sample express server: 

https://github.com/onelson/toy-server

The webpack dev server needs to know what the host/port is for this toy 
server... The defaults should line up automatically, but if you customize 
how the toy server runs, you can set  the `SERVER_ROOT` environment var in 
your shell before launching the dev server.

For example:

`env SERVER_ROOT=http://localhost:8888 npm run start`

This can also be done for your deploys during build.
