function Colors({ data }) {
  return (
    <p>
      {data.map((color) => (
        <span key={color}>{color} </span>
      ))}
    </p>
  );
}

export default Colors;
