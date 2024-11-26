import React, { useEffect, useState } from 'react'

export default function Sec4() {
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setcount3] = useState(1)

    useEffect(() => {
        if(count < 200) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1)
            },1)
            return () => clearInterval(timer)
        }

        if(count1 < 300) {
            const timer = setInterval(() => {
                setCount1((prevCount) => prevCount + 1)
            },1)
            return () => clearInterval(timer)
        }

        if(count2 < 100) {
            const timer = setInterval(() => {
                setCount2((prevCount) => prevCount + 1)
            },1) 
            return () => clearInterval(timer)
        }

        if(count3 < 434) {
            const timer = setInterval(() => {
                setcount3((prevCount) => prevCount + 1)
            },1)
            return () => clearInterval(timer)
        }
    },[count, count1, count2, count3])

  return (
    <div>
        <div className="sec4">
            <div className="count">
                <h1>{count}</h1>
                <p>Projects Completed</p>
            </div>
            <div className="count">
                <h1>{count1}</h1>
                <p>Learning Hours</p>
            </div>
            <div className="count">
                <h1>{count2}</h1>
                <p>Cups Of Coffee</p>
            </div>
            <div className="count">
                <h1>{count3}</h1>
                <p>Real Professinals</p>
            </div>
        </div>
    </div>
  )
}
