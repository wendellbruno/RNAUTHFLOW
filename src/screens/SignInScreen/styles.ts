import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 16px 16px 32px 16px;
    background-color: ${proprs => proprs.theme.colors.background};

`;