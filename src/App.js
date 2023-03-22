import Colors from "./Color";
import lstProducts from "./store";

function App() {
  var errmess = "Không có dữ liệu";
  if (lstProducts.length > 0) {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {lstProducts.map(product => (
          <div
            key={product.ProductName}>
            <p>Hãng: {product.BrandCode}</p>
            <p>Danh mục: {product.CateProCode}</p>
            <p>Tên code: {product.ProductCode}</p>
            <p>Tên sản phẩm: {product.ProductName}</p>
            <p>Giá: {product.Price}</p>
            <Colors data={product.Colors} />
          </div>))}
      </div>
    )
  } else {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {errmess}
      </div>
    );
  }
}

export default App;
