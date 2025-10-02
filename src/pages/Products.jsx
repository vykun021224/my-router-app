import { Link } from "react-router-dom";

const MOCK_PRODUCTS = [
  { id: 1, name: "Keyboard" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Headphone" },
];

export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        {MOCK_PRODUCTS.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
