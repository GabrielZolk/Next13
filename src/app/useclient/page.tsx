"use client" // Somente componentes que possuirem esta sintexe receberão javascript no lado do client para interação (hidratação) [Componentes não podem ser assíncronos com useCliente; É necessário fazer requisições deum jeito menos novo, como com useEffect] 
import { useState } from "react"


export default function ClientSide() {
    const [increment, setIncrement] = useState(0);

    return (
        <div>
            <h1>{increment}</h1>
            <button onClick={() => setIncrement((state) => state + 1)}>Incrementar</button>
            <button onClick={() => setIncrement((state) => state - 1)}>Decrementar</button>
        </div>
    )
}