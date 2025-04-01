import { title } from "@/components/primitives";

export default function RecipesPage() {
  return (
    <div>
      <h1 className={title()}>Recipes</h1>
      <p>These are the recipes</p>
      <div className="flex flex-wrap text-2x1 m-2 border-black justify-center">
        <p className= "m-8 border-3 border-black">child #1</p>
        <p className= "m-8 border-3 border-black">child #2</p>
        <p className= "m-8 border-3 border-black">child #34,981,294,029</p>
      </div>
    </div>
  );
}
