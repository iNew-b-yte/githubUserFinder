import React from 'react';
import Text from '../utilities_components/Text';

function RepoCardComponent({ _class, repos, loading }) {

  if (loading) {
    return <div className='text-center'>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }



  return (
    <>
      {repos.map(repo => {
        return <div key={repo.id} className={_class}>
          <Text _class="fw-bold">{repo.name}</Text>
          <Text _class="fw-light">{repo.description}</Text>         
          <Text _class="fw-bold text-success d-inline-block">Repo link : </Text>
          <a className='fw-light text-success' href={repo.html_url}>{repo.html_url}</a>
          <Text _class="bg-primary text-center text-white d-block w-20 px-1">{repo.language}</Text>
        </div>
      })}
    </>
  );
};

export default RepoCardComponent;