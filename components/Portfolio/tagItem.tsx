export default function TagItem({ name, slug }: any) {
  return (
    <li
      key={slug}
      className="inline-block bg-sky-300 dark:bg-sky-700 p-2 mr-2 mb-2"
    >
      {name}
    </li>
  );
}