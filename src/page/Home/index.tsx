import { useState } from "react";
import Button from "@src/components/Button";
import StartGameDialog from "./components/StartGameDialog";
import Container from "@src/layout/Container";
import ScoreBoardList from "./components/ScoreBoardList";
function Home() {
  const [showStartGameDialog, setShowStartGameDialog] = useState(false);
  return (
    <Container>
      <div className="max-w-xl mx-auto mt-14 w-[90%] md:w-full">
        <h2 className="text-2xl text-white font-semibold">Scoreboard</h2>
        <div className="w-[90%] mt-5 mx-auto md:w-auto overflow-x-hidden">
          <ScoreBoardList />
        </div>
      </div>
      <div className="h-16 w-56 mx-auto mt-10">
        <Button variant="primary" onClick={() => setShowStartGameDialog(true)} text="Start New Game" />
      </div>
      <StartGameDialog isOpen={showStartGameDialog} onClose={() => setShowStartGameDialog(false)} />
    </Container>
  );
}

export default Home;
