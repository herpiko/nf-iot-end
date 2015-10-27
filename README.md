# nf-iot-end

### What is this?

``nf-iot-end`` is part of nf-iot framework which consist of :

- ``nf-iot-end``, running on a raspberry pi device
- ``nf-iot-middleware``, running on a virtual private server
- ``nf-iot-ng``, running on browser or as hybrid mobile app.

<pre>
               <--socket.io--                        <---rest API---
nf-iot-end                       nf-iot-middleware                     nf-iot-ng
               ---socket.io-->                       ---socket.io-->
</pre>

### Requirements

- A raspberry pi (B, B+)
- node v4.x
- ``root`` user in Rasbian.
- DHT11 Sensor, two resistor and a LED (optional)

### Prepare

- Run a ``nf-iot-middleware`` instance on somewhere. For example, it running on ``10.0.0.1`` (hostname) and port ``2999``.
- Download ``bcm2835`` source code from http://www.airspayce.com/mikem/bcm2835/. ``./configure``, ``make`` then ``make install``.
- Clone to raspberry pi side, ``git clone https://github.com/herpiko/nf-iot-end.git``
- ``npm install``

### Run :

- ``HOST=10.0.0.1 PORT=2999 node index.js``

### Basic Schematic

``nf-iot-end`` provide basic code example in ``index.js`` that follow the schematic bellow.

<img src="https://raw.githubusercontent.com/herpiko/nf-iot-end/master/schematic.png">

### License

MIT

### See also

- https://github.com/herpiko/nf-iot-middleware
- https://github.com/herpiko/nf-iot-ng


