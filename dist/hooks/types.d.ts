/**
 * Export module for Hook
 *
 * @packageDocumentation
 */
export declare type Hooks = {
    set_token: (token: string) => void;
    get_token: () => string | undefined;
    users:{
        county3: () => void
    }
};
