import { createContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { products } from "../assets/assets.js";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10; // Fixed typo: 'delevery_fee' to 'delivery_fee'

    const value = {
        products,
        currency,
        delivery_fee, // Corrected spelling
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

// Add PropTypes validation
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children are passed
};

export default ShopContextProvider;
