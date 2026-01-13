# POC FRESH DENO


## Static rendering

Fresh is static by default, which means everything is server-side rendered and static on the client (no JS is shipped to the client)

## Islands

Islands are components that allow user interaction and therefore require JS in the client

Any component added to the `islands` folder will automatically be an interactive island

Components out of the `islands` are "optionally" interactive. For example, if we add our [Button](./islands/Button.tsx) into the index page, even if we pass onClick props, it will be ignored
