import { FormEventHandler, PropsWithChildren } from "react";

type FormGroupProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  title?: string;
};

function FormGroup({
  children,
  onSubmit,
  title,
}: PropsWithChildren<FormGroupProps>) {
  return (
    <form className="grid gap-5 p-8 border" onSubmit={onSubmit}>
      {title && <h1 className="text-3xl font-bold">{title}</h1>}
      {children}
    </form>
  );
}

export default FormGroup;
