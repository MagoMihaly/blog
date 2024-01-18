import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'
import { readCategories } from '../utility/crudUtility';

export const CategContext = createContext();

export const CategProvider = () => {

  const [categories, setCategories] = useState(null)

  useEffect(() => {
    readCategories(setCategories)
  }, [])
  console.log(categories);

  return (
    <div>A</div>
  )
}

