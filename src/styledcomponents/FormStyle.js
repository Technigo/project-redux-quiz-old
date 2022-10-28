import styled from 'styled-components';

export const FormStyle = styled.form`
  margin: 10px;
  font-size: 16px;

  /* --- MEDIA  QUERIES --- */

  @media (min-width: 600px) and (max-width: 1023px) {
    margin: 15px;
  }

  @media (min-width: 1024px) {
    margin: 10px 0;
  }
`;

export const SpanStyle = styled.span`
  display: ${(props) => (props.visible ? 'inline' : 'none')};
`;
