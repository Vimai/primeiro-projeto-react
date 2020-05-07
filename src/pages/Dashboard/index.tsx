import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore diversos repositórios no GitHub</Title>

      <Form>
        <input
          type="text"
          placeholder="Digite aqui o seu melhor repositório!"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11447780?s=460&u=cb4370914fa15619100f47aee5c9b53e17a36cae&v=4"
            alt="GitHub Explorer"
          />
          <div>
            <strong>Vimai asd</strong>
            <p> testestest </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11447780?s=460&u=cb4370914fa15619100f47aee5c9b53e17a36cae&v=4"
            alt="GitHub Explorer"
          />
          <div>
            <strong>Vimai asd</strong>
            <p> testestest </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
