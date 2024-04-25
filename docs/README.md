# Production-Ready Backend

<img src="https://www.amritaclasses.com/assets/reviews/developers/developer1.jpg" width="300"/>

## Super-Quick Setup

### with Docker

use docker-compose to run it in production/development mode :

Development Mode :

```bash
docker-compose -f docker-compose.dev.yaml up --build
```

Production Mode :

```bash
docker-compose -f docker-compose.prod.yaml up --build
```

### or Native

use npm or any other package manager to download:

for development :

```bash
npm i
npm run dev
```

for production :

```bash
npm i
npm run start
```
