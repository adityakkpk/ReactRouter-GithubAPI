import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Github() {

  const data = useLoaderData();

  const [reposData, setReposData] = useState([]);
  useEffect(() => {
      fetch('https://api.github.com/users/adityakkpk/repos')
      .then((response) => response.json())
      .then((result) => setReposData(result));
  }, []);


  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <div className="max-w-3xl mx-auto mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img src={data.avatar_url} alt="User Avatar" className='w-12 h-12 rounded-full' />
            <div>
              <h2 className="text-xl font-bold">{data.name}</h2>
              <p className='text-gray-600 text-start'>@{data.login}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-900">React | JavaScript | TailwindCss | Full Stack Web Development - Mern Stack</p>
          <div class="mt-4"><p class="text-gray-900">Public Repositories: {data.public_repos}</p></div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-bold">Repositories</h2>
          {
            reposData.map((elem) => {
              return (
                <div class="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 class="text-xl font-bold">{elem.name}</h3>
                  <p class="mt-2 text-gray-600">{elem.description}</p>
                </div>
              )
            })
          }
          {/* <div class="mt-4 flex justify-between">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" disabled="">Previous</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Load More</button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Github

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/adityakkpk')

  return response.json();
}