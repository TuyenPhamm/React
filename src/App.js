import Colors from "./Color";
import lstProducts from "./store";

function App() {
  var errmess = "Không có dữ liệu";
  let newarr=[];
  newarr = lstProducts.slice(1,3)
  console.log(newarr)
  if (newarr.length > 0) {
     return (
        <div
          className="App"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          {newarr.length > 0 ? newarr.map(product => (
            <div
              key={product.ProductName}>
              <p>Hãng: {product.BrandCode}</p>
              <p>Danh mục: {product.CateProCode}</p>
              <p>Tên code: {product.ProductCode}</p>
              <p>Tên sản phẩm: {product.ProductName}</p>
              <p>Giá: {product.Price}</p>
              <Colors data={product.Colors} />
            </div>)) : errmess }
        </div>
      );
  }
}

export default App;
