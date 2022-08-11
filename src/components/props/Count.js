import React, { useState } from "react"

function Count(){
    const [hitung, setHitung] = useState(0)

    const add = () => {
        setHitung(hitung + 1)
    }

    const kurang =() => {
        
        setHitung(hitung - 1)
    }
    return (
        <>
            <div className="text-center">
                <h1>
                    Count {hitung} 
                </h1>
                <button onClick={()=> add()} className='btn btn-primary'>Tambah</button>
                <button onClick={()=> kurang()} className='btn btn-danger'>Kurang</button>
            </div>
        </>
    )
}

export default Count;
