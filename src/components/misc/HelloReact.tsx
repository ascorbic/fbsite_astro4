import { useEffect, useState } from "react"

export default function HelloReact() {
    const [counter, setCounter] = useState<number>(0)
    const [user, setUser] = useState<string>('')

    async function loadData() {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const randomUser = data.results[0];
        setUser(randomUser.name.first + ' ' + randomUser.name.last);

    }

    return <div className="flex gap-4">
        <button className="btn btn-secondary" onClick={loadData}>{user || 'load random user'}</button>
        <button className="btn btn-secondary" onClick={() => setCounter(s => counter+1)}>{counter}</button>
    </div>
}