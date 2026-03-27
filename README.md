# samcarty.com portfolio

## Getting Started

First, install MongoDB and create a local deployment in Docker:

```bash
atlas local setup myDeployment --type local \
--mdbVersion 8.0 --port 27017 --connectWith skip
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding new CMS collections

After adding a new collection run the following command to regenerate the types:

```bash
pnpm run payload generate:types
```
