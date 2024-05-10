const UDP = require('dgram');
const express = require('express');
const readline = require('node:readline');

const server = UDP.createSocket('udp4')

const port = 3000;

server.on('listening', () => {

  const address = server.address()

  console.log('Server pokrenut na adresi: ', address.address, ', na port-u: ', address.port)
})

server.on('message', (message, info) => {
  console.log('Primljena poruka: ', message.toString());

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

  rl.question(`Što želite za odgovor: `, podatak => {
    server.send(Buffer.from(podatak), info.port, info.address, (err) => {
        if (err) {
          console.error('Greška u slanju odgovora!')
        } else {
          console.log('Odgovor uspješno poslan!')
        }
    });
    rl.close();
  });
});

server.bind(port);
