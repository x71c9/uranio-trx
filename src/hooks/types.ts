/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
/** --uranio-generate-types-start */

import {urn_response} from 'urn-lib';
import {Api} from '../typ/api_cln';
import {schema} from '../sch/client';
import {Hook} from '../typ/base_cln';
export type Hooks = {
	set_token: (token: string) => void;
	get_token: () => string | undefined;
};
/** --uranio-generate-types-end */
