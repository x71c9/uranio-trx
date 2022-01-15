## URANIO TRX: Uranio transreciever

Uranio TRX extends [Uranio API](https://github.com/nbl7/uranio-api) with methods
that can be called from the client, the same sever or another server.

This methods are called **Hooks** and are auto-generated by
[URANIO CLI](https://github.com/nbl7/uranio-cli).

#### Hooks

For each Atom defined in `atom_book`, Uranio TRX provides _Hooks_ for calling
all its routes.

> Go to [book.ts]() documentation.

```typescript
// src/books.ts

export const atom_book:uranio.types.Book = {
	product:{
		...
	}
}
```
Then it is possible to call:
```typescript
import uranio from 'uranio';

const trx_response = await uranio.hooks.products.find_id('61dc3434a99090002c28cb4b');

if(trx_response.success){
	const product = trx_response.payload;
}
```

#### Authentication

Uranio TRX provides a method for authenitcation:
```typescript
const auth_hook = uranio.auth.create('user');

const trx_response = auth_hook.authenticate('email@email.com', '[PASSWORD]');

if(trx_response.success){
	const token = trx_response.payload.token;
}
```
> `auth_hook.authenticate` will responde with a `Set-Cookie` Header.
> The cookie is `HttpOnly; SameSite=Strict; Secure;`. Therefore the browser
> will send the `token` for each request without JS needed.
>
> However if the application is calling the API from another server the token is
> needed in order to make a call.


Each hook has a parameter for using the `token`:

```typescript
const trx_response = await uranio.hooks.products.find_id('61dc3434a99090002c28cb4b', {}, token)

if(trx_response.success){
	const product = trx_response.payload;
}
```

However it is also possible to set the token for all the hooks by using:

```typescript
uranio.hooks.set_token(token);

const trx_response = await uranio.hooks.products.find_id('61dc3434a99090002c28cb4b');

if(trx_response.success){
	const product = trx_response.payload;
}
```

#### Custom hooks

For any custom routes defined in `book.ts`, Uranio TRX will provide additional hooks:

```typescript
// src/books.ts

export const atom_book:uranio.types.Book = {
	product:{
		...
		dock:{
			routes:{
				add_review:{
					url: '/add-review',
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.RouteAction.WRITE,
					query: ['stars'],
					return: 'Molecule<product>',
					call: ...
				}
			}
		}
	}
}
```
It will be possible to call:
```typescript
const trx_response = await uranio.hooks.products.add_review({query: {stars: 5}});

if(trx_response.success){
	const product = trx_response.payload;
}
```
