import CategoryCallout from '../../Home/CategoryCallout';
import AudiogearCallout from '../../Home/AudiogearCallout';
import ProductCard from '../../CLP/ProductCard';

function CLP({ category }) {
  return (
    <>
      <div className="uppercase bg-primary-200 text-white text-center font-bold text-4xl leading-tight tracking-wider py-12 md:pt-0">
        <h1>{category[0].category}</h1>
      </div>
      <div className="xl:mx-36 md:mx-24 mx-12 my-24">
        {category.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
        <CategoryCallout />
        <AudiogearCallout />
      </div>
    </>
  );
}

export default CLP;
