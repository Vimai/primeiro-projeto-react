import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()
{/* <h1> Repository: {params.repository} </h1> */}
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"></img>
        <Link to="/"> <FiChevronLeft size={18} /> Voltar</Link>
      </Header>

      <RepositoryInfo>
        <header>
        <img
            src="https://avatars1.githubusercontent.com/u/11447780?s=460&u=cb4370914fa15619100f47aee5c9b53e17a36cae&v=4"
            alt="Vinicius Imai"
          />
          <div>
            <strong>Vimai</strong>
            <p>Teste de Repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>321</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>12</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to={`/repositories/repository.full_name`}>
          <div>
            <strong>Vimai/Projeto-React</strong>
            <p>Repositório do Vinicius imai</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
