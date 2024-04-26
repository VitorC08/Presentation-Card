import styled from "styled-components";

export const Card = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.card_bg};

  width: 360px;
  height: 400px;

  box-shadow: 10px 10px 10px -10px ${({ theme }) => theme.COLORS.shadow_color};

  border-radius: 10px;

  > img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 2px solid ${({theme}) => theme.COLORS.purple_500};
    margin-bottom: 4px;
  }

  > a {
    width: 100%;
    margin: 0 auto;

    text-align: center;
  }
`;
