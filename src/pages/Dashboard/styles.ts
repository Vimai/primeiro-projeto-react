import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #363636;
  max-width: 500px;
  line-height: 50px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    height: 70px;
    background: #ffc0cb;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.04, '#FFC0CB')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 54px;
      height: 53px;
      border-radius: 25%;
    }

    div {
      margin-left: 16px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #a8a8b3;
    }
  }
`;
