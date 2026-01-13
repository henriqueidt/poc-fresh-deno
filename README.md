# POC FRESH DENO

## Static rendering

Fresh is static by default, which means everything is server-side rendered and
static on the client (no JS is shipped to the client)

## Islands

Islands are components that allow user interaction and therefore require JS in
the client

Any component added to the `islands` folder will automatically be an interactive
island

Components out of the `islands` are "optionally" interactive. For example, if we
add our [Button](./islands/Button.tsx) into the index page, even if we pass
onClick props, it will be ignored. Now if we add the
[Button](./islands/Button.tsx) to the [Counter](./islands/Counter.tsx), which is
an island, the clicks will increase the counter

## State Management

State is managed via `useSignal` from `preact`

Server-side:

1. The server creates the signal with initial value
2. It renders the consumers of the signal with the initial value
3. Serializes the signal value and sends to the client

Client-side:

1. If the consumer of the signal is not an Island, it will simply render the
   static HMTL with the signal initial value and never update
2. If the consumer is an Island, it will:
   - Hydratate (load JS)
   - Recreates the singal in the JS context
   - Updates the signal on any changes via interaction
3. Multiple consumers of a signal will automatically sync and rerender when one
   of them updates the reference of the signal
