import { ReactNode } from "react";

export default function Container(props: { children: ReactNode | ReactNode[] }) {
  return (
    <div className="container mx-auto pt-1">
      <h1 className="text-5xl text-white font-bold text-center mt-20">Tic Tac Toe</h1>
      {props.children}
    </div>
  );
}
