/**
 * Export module for Hook
 *
 * @packageDocumentation
 */

export type Hooks = {
	set_token: (token:string) => void
	get_token: () => string | undefined
}
