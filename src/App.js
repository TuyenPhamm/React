import Colors from "./Color";
import lstProducts from "./store";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {lstProducts.map((product) => (
        <div key={product.ProductName}>
          <p>Hãng: {product.BrandCode}</p>
          <p>Danh mục: {product.CateProCode}</p>
          <p>Tên code: {product.ProductCode}</p>
          <p>Tên sản phẩm: {product.ProductName}</p>
          <p>Giá: {product.Price}</p>
          <Colors data={product.Colors} />
        </div>
      ))}
    </div>
  );
}

export default App;
