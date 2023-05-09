import StackItem from "./StackItem";

export default function Stack() {
  return (
    <>
      <h2 className="text-2xl font-medium text-black dark:text-white mt-20 mb-4">
        Languages & Tools
      </h2>
      <div className="flex flex-wrap gap-1 mb-10 pb-20 border-b font-mono text-xs border-stone-300 dark:border-stone-600">
        <StackItem html>HTML</StackItem>
        <StackItem css>CSS</StackItem>
        <StackItem sass>SaSS</StackItem>
        <StackItem bootstrap>Bootstrap</StackItem>
        <StackItem tailwind>Tailwind CSS</StackItem>
        <StackItem ruby>Ruby</StackItem>
        <StackItem rails>Ruby on Rails</StackItem>
        <StackItem javascript>JavaScript</StackItem>
        <StackItem node>Node.js</StackItem>
        <StackItem stimulus>Stimulus</StackItem>
        <StackItem postgresql>PostgreSQL</StackItem>
        <StackItem git>Git</StackItem>
        <StackItem mapbox>Mapbox</StackItem>
        <StackItem turf>Turf.js</StackItem>
      </div>
    </>
  );
}
