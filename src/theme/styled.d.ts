import styled from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            background: string;
            primary: string;
            onBackground: string;
        },
        spaces:{
            default: number;
        }
    }
}