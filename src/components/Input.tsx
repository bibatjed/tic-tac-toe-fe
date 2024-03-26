interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Input(props: InputProps) {
  return (
    <div className={"border-2 rounded-md hover:border-slate-800 p-2.5 h-full px-4 w-full focus-within:border-slate-800"}>
      <input className="outline-none bg-transparent w-full text-[15px] font-bold" {...props} />
    </div>
  );
}
