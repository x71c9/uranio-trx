## URANIO TRX: Uranio transreciever

### How to develop

#### Develop module

For developing run
```
yarn dev
```

This will compile and run the file compiled file `./dist/run.js`

#### Develop generate script

##### 1
```
yarn schema:reset
```
The above command creates the base schema from `uranio-schema` and save it in
`./uranio/generate/base/schema.d.ts`.

##### 2
```
yarn generate:schema
```
The above command generates the schema for the current repo `uranio-trx` and save
it in `.uranio/generate/types/schema.d.ts`.

##### 3
```
yarn types:reset
```
The above command creates the base types for the current repo `uranio-trx` and save it in
`./uranio/generate/base/uranio.d.ts`.

##### 4
```
yarn generate:hooks
```
The above command generate the hooks file and save it in `./.uranio/generate/`.

##### 5
```
yarn generate:types
```
The above command generate the full types of the current repo with the Hooks types
in `./.uranio/generate/types/`.

##### 6
```
yarn dev:generate
```
The above command create a development server that compile and run the generate
script and save all the files in the `./generate/` folder.


