import { useEffect, useMemo, useRef, useState } from "react";
import postsApi from "../services/postsApi";
import PostDetailCard from "../components/PostDetailCard";

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [errorList, setErrorList] = useState("");
  const [page, setPage] = useState(1);

  const [detail, setDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const [creating, setCreating] = useState(false);
  const [createResult, setCreateResult] = useState(null);

  // AbortController để hủy request khi unmount
  const abortRef = useRef(null);

  const params = useMemo(() => ({ _limit: 10, _page: page }), [page]);

  useEffect(() => {
    abortRef.current?.abort(); // hủy request cũ (nếu có)
    abortRef.current = new AbortController();

    const fetchPosts = async () => {
      try {
        setLoadingList(true);
        setErrorList("");
        const res = await postsApi.getAll(params, {
          signal: abortRef.current.signal,
        });
        setPosts(res.data);
      } catch (err) {
        setErrorList(err?.message || "Fetch posts failed");
      } finally {
        setLoadingList(false);
      }
    };

    fetchPosts();

    return () => {
      abortRef.current?.abort();
    };
  }, [params]);

  const handleViewDetail = async (id) => {
    try {
      setLoadingDetail(true);
      const res = await postsApi.getById(id);
      setDetail(res.data);
    } catch (err) {
      alert("Load detail failed: " + (err?.message || ""));
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleCreate = async () => {
    try {
      setCreating(true);
      setCreateResult(null);
      const res = await postsApi.create({
        title: "Demo from React + Axios",
        body: "This is a demo payload.",
        userId: 1,
      });
      setCreateResult(res.data);
      alert("Tạo mới (giả lập) thành công!");
    } catch (err) {
      alert("Create failed: " + (err?.message || ""));
    } finally {
      setCreating(false);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Products (Axios Demo)</h1>

      <div style={{ margin: "12px 0" }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          ← Prev
        </button>
        <span style={{ margin: "0 12px" }}>Page: {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next →</button>
        <button style={{ marginLeft: 12 }} onClick={() => setPage(1)}>
          Refresh
        </button>
      </div>

      {loadingList ? (
        <p>Loading list...</p>
      ) : errorList ? (
        <p style={{ color: "tomato" }}>{errorList}</p>
      ) : (
        <ul style={{ lineHeight: 1.8 }}>
          {posts.map((p) => (
            <li key={p.id}>
              <b>#{p.id}</b> — {p.title}{" "}
              <button onClick={() => handleViewDetail(p.id)}>View</button>
            </li>
          ))}
        </ul>
      )}

<hr />
<div>
  <h2>Detail</h2>

  {loadingDetail ? (
    <div className="skeleton">Loading detail…</div>
  ) : detail ? (
    <PostDetailCard post={detail} onClose={() => setDetail(null)} />
  ) : (
    <p>Chọn “View” một item để xem chi tiết.</p>
  )}
</div>
      <div>
        <h2>Create (POST)</h2>
        <button disabled={creating} onClick={handleCreate}>
          {creating ? "Creating..." : "Tạo post mới (giả lập)"}
        </button>
        {createResult && (
          <pre
            style={{
              background: "#111",
              padding: 12,
              borderRadius: 8,
              marginTop: 12,
              overflow: "auto",
            }}
          >
            {JSON.stringify(createResult, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
