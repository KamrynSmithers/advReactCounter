import { useState, useEffect } from 'react'

export const BasicCounter = () => {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([0])