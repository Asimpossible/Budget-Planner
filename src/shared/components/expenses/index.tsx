import React from 'react'
import './expenses.scss'
import { IExpense } from '@/redux/feature/types'
import { useAppSelector } from '@/redux/store'

const Index: React.FC = () => {
    const content = useAppSelector(state => state.content)

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
    }

    return (
        <>
            <div className="wrapper__expenses">
                <div className="wrapper__expenses__title"><h2>Expenses</h2></div>
                <div className="wrapper__expenses__input">
                    <form>
                        <input type="text" id='search' placeholder='Type to search...' onChange={handleSearch} />
                    </form>
                </div>

                {
                    content.map((item: IExpense, index: number): React.ReactNode => {
                        return (
                            <div className="wrapper__expenses__content" key={index}>
                                <div className="wrapper__expenses__content__title">{item.name}</div>
                                <div className="wrapper__expenses__content__price">{item.cost}$</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Index
