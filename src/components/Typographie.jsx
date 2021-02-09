import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { blue, breakpoints, grey, typeScale } from "../utils";

export const subtitleStyle = (props) => css`
  color: ${props.theme.textColorLight};
  font-weight: 400;
  font-size: ${props.theme.typeScale.heading5};
`;

const baseStyle = (props) => css`
  text-decoration: unset;
  font-weight: normal;
  ${props.subtitle && subtitleStyle(props)}
`;

export const Heading00 = styled.h1`
  ${baseStyle}
  font-size: ${typeScale.heading00};
  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typeScale.mobile.heading00};
  } ;
`;

export const Heading0 = styled.h1`
  ${baseStyle}
  font-size: ${typeScale.heading0};
  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typeScale.mobile.heading0};
  } ;
`;
export const Heading1 = styled.h1`
  ${baseStyle}
  font-size: ${typeScale.heading1};
  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typeScale.mobile.heading1};
  } ;
`;
export const Heading2 = styled.h2`
  ${baseStyle}
  font-size: ${typeScale.heading2};
  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typeScale.mobile.heading2};
  } ;
`;
export const Heading3 = styled.h3`
  ${baseStyle}
  font-size: ${typeScale.heading3};
  @media (max-width: ${breakpoints.xs}) {
    font-size: ${typeScale.mobile.heading3};
  } ;
`;

export const Heading4 = styled.h4`
  ${baseStyle}
  font-size: ${typeScale.heading4};
`;

export const Heading5 = styled.h5`
  ${baseStyle}
  font-size: ${typeScale.heading5};
`;

export const Heading6 = styled.h6`
  ${baseStyle}
  font-size: ${typeScale.heading6};
`;

export const Text = styled.p`
  ${baseStyle}
  font-size: ${(props) => props.theme.defaultFontSize};
`;

export const SmallText1 = styled.p`
  ${baseStyle}
  font-size: ${typeScale.small1};
`;

export const SmallText2 = styled.p`
  ${baseStyle}
  font-size: ${typeScale.small2};
`;

export const SmallText3 = styled.p`
  ${baseStyle}
  font-size: ${typeScale.small3};
`;

export const Anchor = styled.a`
  ${baseStyle}
  color: ${blue[500]};
  text-decoration: underline;
  font-style: italic;
`;
