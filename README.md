# basic-react-boilerplate

Run `npm run build` to compile a dist.
Compile results are deposited in `./dist`.

Run `npm run start` for the local dev server.

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