import { Card } from "./style";
import { StyledButton } from "../Button";

export const CardComponent = () => {
  const userImg = "https://github.com/VitorC08.png";

  return (
    <Card>
      <img src={userImg} alt="Github profile picture" />
      <h1>Vitor Sousa</h1>
      <p>Desenvolvedor Front-end</p>
      <a
        href="https://linkedin.com/in/vitor-sousa-costa-7065a2208/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton>Linked-In</StyledButton>
      </a>
      <a
        href="https://github.com/VitorC08"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton>Github</StyledButton>
      </a>
      <a
        href="https://judge.beecrowd.com/pt/profile/444990"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledButton>Beecrowd</StyledButton>
      </a>
    </Card>
  );
};
