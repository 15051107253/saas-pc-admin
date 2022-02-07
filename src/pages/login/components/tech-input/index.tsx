import { FC } from 'react'
import style from './style.module.scss'

interface TechInputProps {
  placeholder?: string
  value?: string | number
}

const TechInput: FC<TechInputProps> = ({ ...otherProps }) => {
  return (
    <div className={style['input-wrap']}>
      <div className={style['input-wrap-inner']}>
        <input type='text' {...otherProps} />
      </div>
    </div>
  )
}

export default TechInput
