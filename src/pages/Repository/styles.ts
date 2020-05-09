import styled, { css }from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover{
      color: #666
    }

    svg {
      margin-right: 5px;
    }
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 90px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height:120px;
      border-radius:25%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 40px;
      }
      strong {
        display: block;
        font-size: 30px;
        color: #3d3d4d;
      }
      span {
        display: block;
        color: #6c6c80;
        margin-top: 4px;
      }
    }

  }

`

export const Issues = styled.div`
  margin-top: 80px;

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

    div {
      flex: 1;
      margin: 0 16px;
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

