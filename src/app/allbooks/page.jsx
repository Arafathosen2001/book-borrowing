
import { AllBoodsData } from '@/data/fetchData';
import React from 'react';
import BooksCard from '../Component/BooksCard';
import FilterBooks from '../Component/FilterBooks';

const AllBookPage = async () => {
    const data = await AllBoodsData();
    return (
        <div className='container py-5'>
            <FilterBooks data={data}></FilterBooks>
            
        </div>
    );
};

export default AllBookPage;