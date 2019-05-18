# Gateways project

## How to setup

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
