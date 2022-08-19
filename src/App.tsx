import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Btn, Circle, Grid, GridBox, NewBox, Overlay, Wrapper } from "./Styled";
const boxVariants = {
  hover: {
    scale: 1.1,
  },
};
function App() {
  const [buttonClick, setButtonClick] = useState(false);
  const toggleClick = () => {
    setButtonClick((prev) => !prev);
  };
  const [id, setId] = useState<string | null>(null);

  return (
    <Wrapper>
      <Grid>
        <GridBox
          variants={boxVariants}
          onClick={() => {
            setId("1");
          }}
          whileHover={"hover"}
          layoutId={"1"}
        />
        <GridBox>{buttonClick ? <Circle layoutId="circle" /> : null}</GridBox>
        <GridBox>{!buttonClick ? <Circle layoutId="circle" /> : null}</GridBox>
        <GridBox
          variants={boxVariants}
          onClick={() => {
            setId("2");
          }}
          whileHover={"hover"}
          layoutId={"2"}
        />
      </Grid>
      <Btn
        layout
        onClick={toggleClick}
        style={{
          transform: buttonClick ? `scale(1.2)` : `scale(1)`,
          color: buttonClick ? "coral" : "black",
          fontSize: buttonClick ? 20 : 15,
        }}
      >
        Swtich
      </Btn>
      <AnimatePresence>
        {id ? (
          <Overlay
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            onClick={() => setId(null)}
          >
            <NewBox layoutId={id} style={{ width: 400, height: 200 }}></NewBox>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
export default App;
