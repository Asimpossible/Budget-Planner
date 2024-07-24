import { setSearchQuery } from '@/redux/feature/budgetSlice';
import { useAppDispatch } from '@/redux/store';
import React from 'react'

const Index: React.FC = () => {

    const dispatch = useAppDispatch()

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(event.target.value));
    };
    return (

        <input
            type="text"
            name='search'
            id='search'
            placeholder='Search for expenses...'
            onChange={handleSearch}
            className='w-52 h-12 text-xl my-4 mb-14 py-2 px-2.5 rounded-lg focus:outline-none'
        />
    )
}

export default Index
