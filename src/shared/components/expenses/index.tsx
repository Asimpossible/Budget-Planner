import React from 'react'
import './expenses.scss'
import { IExpense } from '@/redux/feature/types'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { deleteItem, editItem } from '@/redux/feature/budgetSlice'

const Index: React.FC = () => {

    const content = useAppSelector(state => state.content.content)
    const dispatch = useAppDispatch()

    const [editingId, setEditingId] = React.useState<number | null>(null)
    const [name, setName] = React.useState<string>('')
    const [cost, setCost] = React.useState<number | string>('')

    const startEditing = (item: IExpense) => {
        setEditingId(item.id)
        setName(item.name)
        setCost(item.cost)
    }

    const handleEdit = () => {
        if (editingId !== null) {
            dispatch(editItem({ id: editingId, name, cost: Number(cost) }));
            setEditingId(null);
            setName('');
            setCost('');
        }
    };

    const handleDelete = (id: number) => {
        dispatch(deleteItem(id))
    }

    return (
        <>
            <div className="wrapper__expenses">
                <div className="expenses flex flex-col gap-2">
                    <div className="expenses__title text-2xl font-semibold text-palette-5 my-4" >Expenses</div>
                    <div>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Index



{/* {
                        content.map((item: IExpense, index: number): React.ReactNode => {
                            return (
                                <div className="expenses__content flex justify-between items-center px-10 py-2 rounded-lg shadow-2xl bg-palette-6 " key={index}>
                                    <div className="expenses__content__title text-lg text-white font-semibold">{item.name}</div>
                                    <div className='flex items-center gap-4'>
                                        <button onClick={() => { startEditing }} className='text-green-500 transition-all hover:text-white hover:bg-green-700 font-semibold px-2 rounded-md'>Edit</button>
                                        <button onClick={() => { handleDelete }} className='text-red-500 p-1 font-semibold transition-all hover:text-white hover:bg-red-700 rounded-lg'>Remove</button>
                                        <div className="expenses__content__price rounded-lg px-4 py-1 text-gray-200 bg-palette-7 font-semibold">{item.cost} $</div>
                                    </div>
                                </div>
                            )
                        })
                    } */}