/**
 * Main module
 *
 * @packageDocumentation
 */

import * as urn_trx from './trx/trx';

export const book = {
	a: {
		props: {
			propa1: {
				
			},
			propa2: {
				
			}
		}
	},
	b: {
		props: {
			propb1: {
				
			},
			propb2: {
				
			}
		}
	}
} as const;

type B<A extends keyof typeof book> = {
	get: () => A
}

type SameKey = {
	[k in keyof typeof book]: B<k>;
}

function ggg():SameKey{
	return {
		a: {
			get: () => 'a'
		},
		b: {
			get: () => 'b'
		}
	};
}

export const a = ggg();

a.a.get();

export default urn_trx;
