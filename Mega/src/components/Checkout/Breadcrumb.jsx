import { motion } from 'framer-motion';

const Breadcrumb = () => {
    const breadcrumbVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            className="flex items-center space-x-4 text-gray-500 mb-4"
            variants={breadcrumbVariants}
            initial="hidden"
            animate="visible"
        >
            <a href="/" className="hover:underline">Home</a>
            <span>›</span>
            <a href="/cart" className="hover:underline">View Cart</a>
            <span>›</span>
            <span className="font-semibold text-black">Checkout</span>
        </motion.div>
    );
};

export default Breadcrumb;
