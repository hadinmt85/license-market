"use client";
import { useState } from "react";

function App() {
    const [page, setPage] = useState(true);

    return (
        <>
            {page && <p>Hello World</p>}
            <button onClick={() => setPage(prev => !prev)}>
                {page ? "close" : "show"}
            </button>
        </>
    )
}

export default App;