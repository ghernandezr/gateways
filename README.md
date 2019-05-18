# Gateways project

This project is a REST service (JSON/HTTP) for storing information about gateways and their associated devices

## How to setup

### Install

- Intall `Node` and `MongoDB`

### Cloning and install dependencies

```bash
git clone https://github.com/ghernandezr/gateways.git

cd gateways

npm install
```

### Run in dev mode

```bash
npm run dev
```

### Run in dev mode with nodemon

```bash
npm start
```

### Run in prod mode

```bash
npm run prod
```

### Run test

```bash
npm run test
```

## Endpoint Gateway

- GET

  - "/gateway/:gatewayId" - Get a gateway by Id

  - "/gateway" - Get all gateways

- POST

  - "/gateway" - Save a gateway

- PUT

  - "/gateway/:gatewayId" - Update a gateway

- DELETE
  - "/gateway/:gatewayId" - Delete a gateway by Id
  - "/gateway/:gatewayId/device/:deviceId" - Delete a device from a gateway by Id

### Example gateway data

```json
{
  "serialNumber": "123DFD23312",
  "name": "Apolo",
  "ipV4Address": "123.23.45.33"
}
```

```json
{
  "serialNumber": "123DFD23312",
  "name": "Apolo",
  "ipV4Address": "123.23.45.33",
  "devices": ["5ce02a209dce2b54f0995360"] //this device must exist in database
}
```

## Endpoint Device

- GET

  - "/device/:deviceId" - Get a device by Id
  - "/device" - Get all devices

- POST

  - "/device" - Save a device

- PUT

  - "/device/:deviceId" - Update a device

- DELETE
  - "/device/:deviceId" - Delete a device by Id

### Example device data

```json
{
  "UID": 1231,
  "vendor": "Intel",
  "status": { "type": "offline" }
}
```

```json
{
  "UID": 1231,
  "vendor": "Intel",
  "status": { "type": "online" }
}
```
