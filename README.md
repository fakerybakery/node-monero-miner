# Eazy Node Miner

Mine cryptocurrencies [Monero (XMR)](https://getmonero.org/) from SERVERSIDE node.js with C++ XMRIG(No complicated install) (Linux/Windows).
Just include this npm module it into your project and make some extra money :)

# Without freezing down the machine

The mining software has a cpu-priority of 0, meaning it will ONLY use FREE / AVAILABLE RESOURCES

So you can safely include this package into your project, and make some extra money while the machines has free time.

Just try it out. Use the miner and continue using the machine.

# Why this package?

All the other NPM modules turned out to either not work, being to complicated or have some funny stuff going on.
This package is made to be transparent, easy and FAST.

# Easy setup

## Install

```
npm install eazyminer
```

## Usage

```js
const Miner = require('eazyminer');

const miner = new Miner({
    wallet: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8'
});
```

# Web client

The library contains an easy to use web-overview (optional).
Just go to localhost:3000 and check your realtime stats.

# Config

```js
{
    // required
    wallet: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',

    // optional

    // Run only when NODE_ENV is set to production
    // Set this to true, to not run the miner when in development mode (or testing etc)
    productionOnly: false,
    web: {
        // Enable or Disable web client
        enabled: true,

        // The used port for the webclient
        port: 3000 
    },
    log: {

        // Set to null to disable
        writeToFile: 'easyminer.txt',

        // Set to false to disable writing to console
        writeToConsole: true
    }
}
```

# Development

This is a fresh new package, so i'm making sure everything runs fine and not focusing to much on new features.
If you have ANY problem, please drop a bug report on Github. If there are enough people using this, I will start to invest heavily. 
