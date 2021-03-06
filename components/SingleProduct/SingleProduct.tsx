import { cartMutation } from 'apollo';
import CountButton from 'components/Button/CountButton';
import AddToCartButton from 'components/Cart/AddToCartButton';
import { AppContext } from 'context/AppContext';
import Image from 'next/image';
import { FC, useContext } from 'react';
import { CartCounter } from 'utils/CartCounter';
import { formatMoney, getCarItems } from 'utils/HelperFunctions';
import { IProducts } from 'utils/types';

import styles from './SingleProduct.module.scss';

const cn = require('classnames');

interface SingleProductProps {
    product: IProducts;
    className?: string;
}

const SingleProduct: FC<SingleProductProps> = ({ product, className }) => {
    const { setCartOpen } = useContext(AppContext);
    const { count, negativeHandler, positiveHandler, resetCount } = CartCounter();

    const getItem = getCarItems(product, count);

    const handleCart = () => {
        setCartOpen(true);
        cartMutation.addCart(getItem.productName, getItem.productId, getItem.price, getItem.quantity, getItem.image);
        resetCount();
    };

    return (
        <div className={cn(styles.container, className)}>
            <div className={styles.desktopImage}>
                <Image
                    src={product?.image?.desktop}
                    width="540"
                    height="560"
                    alt={product?.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.tabletImage}>
                <Image
                    src={product?.image?.tablet}
                    width="281"
                    height="480"
                    alt={product?.name}
                    className={styles.image}
                />
            </div>
            <div className={styles.mobileImage}>
                <Image
                    src={product?.image?.mobile}
                    width="360"
                    height="362"
                    alt={product?.name}
                    className={styles.image}
                />
            </div>

            <div className={styles.infoContainer}>
                {product?.newProduct && <h3 className={styles.newProduct}>New Product </h3>}
                <h4 className={styles.title}>{product?.name} </h4>
                <p className={styles.description}>{product?.description} </p>

                {product?.price && <p className={styles.price}>${formatMoney(product?.price)}</p>}

                <div className={styles.buttonContainer}>
                    <CountButton
                        classname={styles.countButton}
                        negativeClick={negativeHandler}
                        positiveClick={positiveHandler}
                        value={count}
                    />
                    <AddToCartButton addToCartClick={handleCart} classname={styles.cartButton} />
                </div>
            </div>
        </div>
    );
};
export default SingleProduct;
