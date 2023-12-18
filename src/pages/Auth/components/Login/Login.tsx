import { Button, Checkbox, Form, Input, Typography } from 'antd'
import styles from 'pages/Auth/Auth.module.scss'

const Login: React.FC = () => {
  return (
    <div className={styles.page}>
      <Form
        className={styles.form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
      >
        <Typography.Title level={2}>Вход</Typography.Title>

        <Form.Item
          label="Почта"
          name="mail"
          rules={[{ required: true, message: 'Введите почту!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember">
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className="text-black" type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
        <Button>Регистрация</Button>
      </Form>
    </div>
  )
}

export default Login
