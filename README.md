# node-monero-miner

## Introduction

`node-monero-miner` is a simple tool to mine Cryptonote-based cryptocurrencies, including Monero (XMR), Bytecoin (BCN), and Ravencoin (RVN). This tool is a simple NodeJS wrapper for the [XMRig miner](https://github.com/xmrig/xmrig).

## Install

To install `node-monero-miner`, just run:

```
npm i node-monero-miner
```

## Usage

Here's how to use `node-monero-miner`:

```js
const Miner = require('node-monero-miner');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',
        url: 'pool.supportxmr.com:443', // optional pool URL,
        pass: 'x',
        tls: true,
    }],
    autoStart: false // Don't start the miner immediately
});

miner.start(); // Start the miner if autoStart is set to false
// miner.stop() // Stop the miner
```

## Documentation

```js
{
    // (XMRIG config options https://xmrig.com/docs/miner/config/pool)
    pools: [
        {
            coin: 'XMR',

            // wallet address
            user: '<Your wallet address>',
            
            /**
             * optional
             */ 
            url: 'pool.supportxmr.com:443',
            pass: 'x',
            algo: null,
            'rig-id': null,
            nicehash: false,
            enabled: true,
            keepalive: true,
            tls: true,
            'tls-fingerprint': null,
            daemon: false,
            socks5: null,
            'self-select': null,
            'submit-to-origin': false
        }
    ],

    /**
     * optional
     */

    // (XMRIG config options https://xmrig.com/docs/miner/config/opencl)
    opencl: {
        enabled: false,
        platform: 'AMD',
        loader: null,
        adl: true,
        'cn-lite/0': false,
        'cn/0': false
    },

    // (XMRIG config options https://xmrig.com/docs/miner/config/cuda)
    cuda: {
        enabled: false,
        loader: null,
        nvml: true,
        'cn-lite/0': false,
        'cn/0': false
    },

    // Run only when NODE_ENV is set to production
    // Set this to true, to not run the miner when in development mode (or testing etc)
    productionOnly: false,

    // Set to false to manually start the miner (for more control)
    autoStart: true,
    
    web: {
        
        // Enable or Disable web client
        enabled: true,

        // The used port for the webclient
        port: 3000 
    },
    log: {
        writeToFile: 'log.txt',

        // Set to false to disable writing to console
        writeToConsole: true
    }
}
```

## Web Client

This package includes a web client to visualize speed and efficiency. By default, it is accessible at [localhost:3000](http://localhost:3000). Try disabling this web client if you don't want something clogging up port 3000.

## OpenCL support (GPU)

Make sure OpenCL is installed and you enable it in the config. 
Most graphic drivers include the OpenCL platform by default.

## Cuda support (GPU)

Make sure Cuda is installed and you enable it in the configuration.

## Dynamic Resource Allocation

This tool only uses the remaining available resources, so it shouldn't slow down your machine.

## Credits

This project is a heavily modified fork of [DutchKevv/Overhead2Crypto](https://github.com/DutchKevv/Overhead2Crypto).
