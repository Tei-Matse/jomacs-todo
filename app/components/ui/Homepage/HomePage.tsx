import { Button } from "../button";

export function HomePage() {
  return (
    <section className="w-screen h-screen relative flex flex-row justify-center items-center">
      <div className="w-3/5 bg-background h-9/12 max-h-9/12 overflow-auto ring-1 ring-slate-300 rounded-sm shadow-xl p-4">
        <div className="flex flex-row justify-between">
          <h1>Todo</h1>
          <Button>Create Todo</Button>






        </div>
      </div>
    </section>
  );
}
