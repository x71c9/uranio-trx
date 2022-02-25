/**
 * Register module for URANIO TRX
 *
 * @packageDocumentation
 */

import {register} from '../reg/server';

import {atom_book} from '../atoms';

for(const [atom_name, atom_def] of Object.entries(atom_book)){
	register(atom_def as any, atom_name as any);
}
