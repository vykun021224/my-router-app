import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <p>Bạn đang xem sản phẩm có ID: {id}</p>
      <Link to="/products">← Quay lại danh sách</Link>
    </section>
  );
}
