import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className="flex items-center gap-2">
            <FaCircleCheck className="text-indigo-800" />
            <p className="text-lg font-semibold">{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.array
}

export default Feature;