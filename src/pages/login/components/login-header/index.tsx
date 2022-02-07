import { FC, ReactNode } from 'react'
import style from './style.module.scss'

interface LoginHeaderProps {
  children?: ReactNode
}

const LoginHeader: FC<LoginHeaderProps> = ({ children }) => {
  return (
    <header className={style['login-header']}>
      <h2>{children}</h2>
      <div className={style['login-header-bg']}></div>
    </header>
  )
}

export default LoginHeader
