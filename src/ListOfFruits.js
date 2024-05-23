const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ListOfFruits() {
    const litItems = products.map(product =>
        <li key = {product.id} 
            style ={{
                color: product.isFruit ? 'blue' : 'red'
            }}
        >
            {product.title}
        </li>
        )

    return <ul>{litItems}{litItems}</ul>
}

export default ListOfFruits;
