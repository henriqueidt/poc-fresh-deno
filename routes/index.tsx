import { useSignal } from "@preact/signals";
import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";

export default define.page(function Home(ctx) {
  const count = useSignal(3);

  console.log("Shared value " + ctx.state.shared);

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Fresh counter</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <Counter count={count} />

        <p>
          The count below will only render initial signal value as static
          content and wont update, as it's not inside an island
        </p>
        <div class="text-2xl">{count}</div>

        <p>
          The onClick prop of the button below will be ignored, as this is not
          an interactive island
        </p>
        <Button onClick={() => console.log("This is not and island")}>
          Click me!
        </Button>
      </div>
    </div>
  );
});
