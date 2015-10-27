# nf-iot-end

### Requirements :

- A raspberry pi (B, B+)
- node v4.x
- ``root`` user in Rasbian.

### Prepare

- Run a ``nf-iot-middleware`` instance on somewhere. For example, it running on ``10.0.0.1`` (hostname) and port ``2999``.
- Download ``bcm2835`` source code from http://www.airspayce.com/mikem/bcm2835/. ``./configure``, ``make`` then ``make install``.
- Clone to raspberry pi side, ``git clone https://github.com/herpiko/nf-iot-end.git``
- ``npm install``

### Run :

- ``HOST=10.0.0.1 PORT=2999 node index.js``

### Schematic

### License

MIT

### See also :

- https://github.com/herpiko/nf-iot-middleware
- https://github.com/herpiko/nf-iot-ng


