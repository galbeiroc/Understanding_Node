# Understanding_Node

Understanding Node.js without any other NPM packages. Let's take your back-end engineering skills to the next level!

# Nodejs

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts. [Docs](https://nodejs.org/en).
NodeJS is a C++ application that has V8 embedded into it. There are several libraries that nodejs relies on to work the way it does.
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++.
Libuv C library that is used to abstract non-blocking I/O operations to consistent interface across all supported platforms.

# NVM
nvm allows us to quickly install and use different versions of node via the command line.

Example:

```bash
$ nvm ls
v14.18.0
v16.16.0
v18.6.0
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
$ nvm ls-remote # list all node version
```