"use client";
import { useState, useEffect, useContext } from "react";
import { financeContext } from "@/lib/store/finance-context";

import { currencyFormatter } from "@/lib/utils";
import ExpenseCatItem from "@/components/ExpenseCatItem";
import AddIncomeModal from "@/components/modals/AddIncomeModal";
import AddExpensesModal from "@/components/modals/AddExpensesModal";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function accounting(){
    const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
    const [showAddExpensesModal, setShowAddExpensesModal] = useState(false);
    const [balance, setBalance] = useState(0)

    const { expenses, income } = useContext(financeContext)

    useEffect(() => {
    const newBalance = income.reduce((total, i) => {
        return total + i.amount
    }, 0) -
    expenses.reduce((total, e) => {
        return  total + e.total;
    },0);
    setBalance(newBalance);
    }, [expenses, income]);

    return (
        <>
        {/* Add Income Modal */}
        <AddIncomeModal 
            show={showAddIncomeModal} 
            onClose={setShowAddIncomeModal} 
        />

        {/* Add Expenses Modal */}
        <AddExpensesModal 
            show={showAddExpensesModal}
            onClose={setShowAddExpensesModal}
        />
        
        <main className="container max-w-2xl px-6 mx-auto">
            <section className="py-3">
            <small className="text-gray-400 text-md">My Balance</small>
            <h2 className="text-4xl font-bold">{ currencyFormatter(balance) }</h2>
            </section>

            <section className="flex item-center gap-2 py-3">
            <button 
                onClick={() => {
                setShowAddExpensesModal(true);
                }} 
                className="btn btn-primary"
                >
                + Expensese
            </button>
            <button 
                onClick={() => {
                setShowAddIncomeModal(true);
                }} 
                className="btn btn-primary-outline"
                >
                + Income
            </button>
            </section>

            {/* Expenses */}
            <section className="py-6">
            <h3 className="text-2xl">My Expenses</h3>
            <div className="flex flex-col gap-4 mt-6">
                {expenses.map(expense => {
                return(
                    <ExpenseCatItem  
                    key={expense.id}
                    expense={expense}
                    />
                );         
                })}
            </div>
            </section>
            {/* chart section */}
            <section className="py-6">
                <a id="stats" />
                <h3 className="text-2xl">Stats</h3>
                <div className="w-1/2 mx-auto">
                    <Doughnut data={{
                        labels: expenses.map((expense) => expense.title),
                        datasets: [
                                {
                                label: "Expenses",
                                data: expenses.map((expense) => expense.total),
                                backgroundColor: expenses.map((expense) => expense.color),
                                borderColor: [ "#18181b" ],
                                borderWidth: 5,
                                },
                            ],
                        }} 
                    />
                </div>
            </section>
        </main>
        </>
    );
}
