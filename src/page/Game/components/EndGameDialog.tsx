import Button from "@src/components/Button";
import DialogWrapper from "@src/components/DialogWrapper";

interface EndGameDialog {
  message: string;
  isOpen: boolean;
  onStop: () => void;
  onContinue: () => void;
  isLoading: boolean;
}

export default function EndGameDialog(props: EndGameDialog) {
  return (
    <DialogWrapper isOpen={props.isOpen} title="Tic Tac Toe">
      <div className="flex flex-col gap-4 mt-3">
        <h3 className="font-bold text-lg">{props.message}</h3>

        <div className="flex flex-row justify-end gap-2 items-center">
          <div className="h-14 w-28">
            <Button disabled={props.isLoading} onClick={props.onStop} text="Stop" variant="secondary" />
          </div>
          <div className="h-14 w-28">
            <Button disabled={props.isLoading} onClick={props.onContinue} text="Continue" variant="primary" />
          </div>
        </div>
      </div>
    </DialogWrapper>
  );
}
