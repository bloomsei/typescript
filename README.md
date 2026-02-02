# Typescript

An example Typescript project for learning and exploring

## Monorepo Structure

```
typescript/
├── packages/
│   ├── concepts/           → @learning/concepts
│   │   └── src/index.ts
│   └── projects/
│       └── movies/         → @learning/movies
│           └── src/*.ts
├── package.json            (workspaces root)
├── tsconfig.base.json      (shared compiler options)
└── tsconfig.json           (project references)
```

## Commands

- `npm run build` — builds all packages
- `npm run build -w @learning/movies` — builds only movies
- `npm run start -w @learning/movies` — runs movies app
- F5 in VSCode — debugs the movies project

## Adding new packages

- Projects: `packages/projects/<name>/`
- Concepts: `packages/concepts/src/<topic>.ts`

## Updating dependencies

```bash
npm outdated                              # check what's outdated
npx npm-check-updates -u --workspaces     # update all package.json files
npm install                               # install updated versions
```

## Enabling Typescript

```bash
npm install typescript --save-dev
```

## Setting up TS Project

```bash
tsc init
```

## Compiling TS to JS

```bash
tsc
```

## Find type definitions

DefinitelyTyped: https://definitelytyped.org/

