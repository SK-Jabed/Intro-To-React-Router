import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-gray-300 rounded-lg p-4 flex flex-col">
            <div className="flex-grow">                
            <h2 className="text-center">
                <span className="text-4xl font-bold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h3 className="text-2xl text-center border-b-2 pb-2 font-semibold mt-3">{name}</h3>
            <div className="flex flex-col gap-2 mt-3 mb-2">                
            {
                features.map((feature, idx)=> <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            </div>
            <div>
                <button className="mt-4 px-7 py-3 bg-violet-800 w-full text-white rounded-xl text-lg font-semibold hover:bg-indigo-900">Buy Now</button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;