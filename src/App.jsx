import React from "react"
import { Counter } from "./components/Conter"
import { RepositorList } from "./components/RepositoryList"
import "./styles/global.scss"

export function App() {
    return (
        <>
            <RepositorList />
            <Counter />
        </>
    )

}