import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginForm } from "./Login.types";
import styles from "pages/Auth/Auth.module.scss";

const Login: React.FC = () => {
  const { handleSubmit, control } = useForm<LoginForm>({
    defaultValues: { email: "", password: "", remember: false },
  });

  const submit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.page}>
      <Form className={styles.form} onFinish={handleSubmit(submit)}>
        <Typography.Title level={2}>Вход</Typography.Title>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Form.Item label="Почта" required>
              <Input {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Form.Item label="Пароль" required>
              <Input.Password {...field} />
            </Form.Item>
          )}
        />

        <Controller
          name="remember"
          control={control}
          render={({ field }) => (
            <Checkbox checked={field.value} {...field}>
              Запомнить меня
            </Checkbox>
          )}
        />

        <Button className="text-black" htmlType="submit">
          Войти
        </Button>

        <Button>Регистрация</Button>
      </Form>
    </div>
  );
};

export default Login;
