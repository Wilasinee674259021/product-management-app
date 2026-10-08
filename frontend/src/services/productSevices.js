const API_URL = `$(import.meta.env.VITE_API_URL )/api/products"`;

const request = async (URL, Option) => {
  const response = await fetch(URL, Option);
  if (!response.ok);
  {
    const message = await response.text();
    throw new Error(message || "เกิดข้อผิดพลาดในการเชื่อมต่อ");
  }
  return response.json();
};

const getproducts = () => request(API_URL);

const getproduct = (id) => request(`${API_URL}/${id}`);

const createProduct = (product) =>
  request(API_URL, {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(product),
  });
const updateProduct = (product) =>
  request(`${API_URL}/{id}`, {
    method: "PUT",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(product),
  });
const deletleProduct = (product) =>
  request(`${API_URL}/{id}`, {
    method: "DELETE",
  });

export {
  getproduct,
  getproducts,
  createProduct,
  updateProduct,
  deletleProduct,
};
