// import React from 'react'
import { ReactNode } from "react"
import "./Container.scss"

interface IcontainerProps {
    children: ReactNode
}

const Container = ({children}: IcontainerProps) => {
  return <div className="container-custom">{children}</div>
}

export default Container