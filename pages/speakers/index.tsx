import { FC } from 'react';

import Layout from '../../components/Layout';
import Products from '../../components/Products';
import { menuItems } from '../../seed-data';
import { getCategories, getProducts } from '../../utils/HelperFunctions';
import { ProductType } from '../../utils/types';

const speakers: FC = () => {
    const products = getProducts(ProductType.Speakers);
    const blockInfos = getCategories();

    return (
        <Layout menus={menuItems}>
            <Products products={products} blockInfos={blockInfos} />
        </Layout>
    );
};

export default speakers;
