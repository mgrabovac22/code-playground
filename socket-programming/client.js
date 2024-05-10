const dgram = require("dgram");

const serverIP = "127.0.0.1"; 
const serverPort = 3000; 

const JMBAG = "0016160563";
const ime = "Marin";
const prezime = "Grabovac";

const client = dgram.createSocket("udp4");

const jmbagBuffer = Buffer.from(JMBAG, "ascii");
const imeBuffer = Buffer.from(`${JMBAG}, ${ime}`, "ascii");
const prezimeBuffer = Buffer.from(`${JMBAG}, ${prezime}`, "ascii");

function provjeraIP(serverIP) {
    const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
    if (!ipRegex.test(serverIP)) {
        console.log("Neispravan IP format!");
        return false;
    }
    return true;
}

client.send(jmbagBuffer, serverPort, serverIP, (err) => {
    if(!provjeraIP(serverIP)){
        process.exit(1);
    }
    if (err) {
        console.log("Greška u slanju JMBAG-a: ", err);
        throw err;
    }
    else{
        console.log("JMBAG poslan poslužitelju.");
    }
});

client.on("message", (msg, rinfo) => {
  const receivedMessage = msg.toString("ascii");
  console.log(`Primljena poruka od poslužitelja: ${receivedMessage}`);

  if (receivedMessage === "ime") {
    client.send(imeBuffer, serverPort, serverIP, (err) => {
        if(!provjeraIP(serverIP)){
            process.exit(1);
        }
        if (err) {
            console.log("Greška u slanju imena: ", err);
            throw err;
        }
        console.log("Odgovor poslan: JMBAG, ime");
    });
  } else if (receivedMessage === "prezime") {
    client.send(prezimeBuffer, serverPort, serverIP, (err) => {
        if(!provjeraIP(serverIP)){
            process.exit(1);
        }
        if (err){
            console.log("Greška u slanju prezimena: ", err);
            throw err;
        } 
        console.log("Odgovor poslan: JMBAG, prezime");
    });
  } else {
    console.log("Primljena nepoznata poruka od poslužitelja.");
  }
});

client.on("error", (err) => {
    console.error(`Greška u komunikaciji s poslužiteljem: ${err}`);
    client.close();
});
