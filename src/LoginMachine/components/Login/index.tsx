import { FC, useContext, useState } from "react";
import { TReactContextType } from "../../../types";
import { Context } from "../../BaseComponentProvider";
import { Button, Input, Logo } from "..";

interface ILoginProps {
  username?: string;
  password?: string;
}

const Login: FC<ILoginProps> = () => {
  const { actions } = useContext<Partial<TReactContextType>>(Context);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center h-auto border w-80 p-8 mb-8">
      <Logo className="w-40" />
      <form
        className="flex flex-col gap-3 pt-8"
        onSubmit={(e) => {
          e.preventDefault();
          actions?.handleLogin(username, password);
        }}
      >
        <Input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit">Login</Button>
        <div className="flex justify-between">
          <button className="text-xs text-blue-500 underline italic">
            Forgot Password
          </button>
          <button
            className="text-xs text-blue-500 underline italic"
            onClick={actions?.OnClickRedirectSignup}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
