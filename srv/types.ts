/**
 * Exported type module for server
 *
 * @packageDocumentation
 */

export * from '../api/srv/types';

// Override Book from '../core/srv/types' by '../typ/book_cln'
import {FullConfiguration, Configuration} from '../typ/conf';

export {FullConfiguration, Configuration};

export * from '../typ/conf';

// Override Book from '../core/srv/types' by '../typ/book_cln'
// import {Book} from '../typ/book_srv';

// export {Book};

// export * from '../typ/book_srv';

