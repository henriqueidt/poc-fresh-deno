import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      {/* The clicks on buttons in this component will work, as it is an interactive island */}
      <Button id="decrement" onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button id="increment" onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
