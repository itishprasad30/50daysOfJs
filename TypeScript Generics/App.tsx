import React, { useState } from "react";

interface Props {
  name: string;
}

const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullname: string | null }>({ fullname: "" });
  console.log(state.fullname);

  return <div>Hello World , {name}</div>;
};

interface FormProps<T> {
  value: T;
  children: (value: T) => JSX.Element;
}
const Form = <T extends {}>({ value, children }: FormProps) => {
  return children(value);
};

const App: React.FC = () => {
  return (
    <div>
      <Form<{ firstName: string | null }> value={{ firstName: "John" }}>
        {(value) => <div>{value.firstName} </div>}
      </Form>
    </div>
  );
};

export default App;
