import { LoginHeader, TechInput } from './components'
import style from './style.module.scss'

const Login = () => {
  return (
    <div className={style['login-wrap']}>
      <main className={style.main}>
        <LoginHeader>LOGIN</LoginHeader>
        <section className={style['login-wrap-content']}>
          <div className={style['login-wrap-content-left']} />
          <div className={style['login-wrap-content-right']}>
            <div className={style['login-container']}>
              <div className={style['login-container-item']}>
                <TechInput placeholder='请输入用户名' />
              </div>
              <div className={style['login-container-item']}>
                <TechInput placeholder='请输入密码' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Login
