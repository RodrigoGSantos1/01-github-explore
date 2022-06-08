import React from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository ={
    name: "PandaPay",
    description: "App PandaPay",
    link : "https://github.com/RodrigoGSantos1/PandaPay"
}

export function RepositorList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}