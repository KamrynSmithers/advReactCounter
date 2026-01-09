import { useState, useEffect } from 'react'

export const BasicCounter = () => {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([0])


  useEffect(() => {
    setHistory(prev => [...prev, count])
  }, [count])

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') setCount(prev => prev + 1)
      if (e.key === 'ArrowDown') setCount(prev => prev - 1)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => {
    setCount(0)
    setHistory([0])
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Basic Counter</h2>
      <p>Current Count: {count}</p>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment} style={{ marginLeft: '0.5rem' }}>
        Increment
      </button>
      <button onClick={reset} style={{ marginLeft: '0.5rem' }}>
        Reset
      </button>

      <h3>History:</h3>
      <p>{history.join(', ')}</p>

      <p style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
        Use ArrowUp to increment and ArrowDown to decrement.
      </p>
    </div>
  )
}
