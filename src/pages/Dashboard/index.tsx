import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}


const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo){
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)

      const repository = response.data

      setRepositories([...repositories, repository]);
      setNewRepo('')
      setInputError('')
    } catch (error) {
      setInputError('Erro na busca do repositório');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore diversos repositórios no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite aqui o seu melhor repositório!"
        />
        <button type="submit"> Pesquisar </button>
      </Form>

      { inputError && <Error>{inputError}</Error>}


      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/11447780?s=460&u=cb4370914fa15619100f47aee5c9b53e17a36cae&v=4"
            alt="Vinicius Imai"
          />
          <div>
            <strong>Vimai/Projeto-React</strong>
            <p>Repositório do Vinicius imai</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        {repositories.map(repository => (
        <a key={repository.full_name} href="teste">
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      ))}


      </Repositories>
    </>
  );
};

export default Dashboard;
