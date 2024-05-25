import React from "react"
import { format } from "date-fns"
import Hero from '@/components/hero'

export default function Profile(props) {
  return (
    
    <>
      <article className="bg-black p-5 rounded shadow shadow-red-500">
        <div className="flex items-center">
          <img
            src={props.owner.avatar_url}
            alt={props.owner.login}
            className="w-16 h-16 shadow rounded-full"
          />
          <ul className="ml-5">
            <li>
              <h2 className="bg-red-700 py-1 px-2 rounded-full font-bold text-xl">{props.owner.login}</h2>
            </li>
            <div>
              <p className=" mr-2">{props.name}</p>
              {props.private ? (
                <p className="bg-red-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">
                  Privado
                </p>
              ) : (
                <p className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75 mr-2">
                  Publico
                </p>
              )}
            </div>
          </ul>
        </div>

        <div>
          <p className="bg-red-700 rounded-lg p-1 mt-1">
            Este repositorio fue creado el {" "}
            {format(new Date(props.created_at), "dd MMMM yyyy")} por {" "}
            {props.owner.login}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between text-right">
          <a
            className="bg-blue-800 rounded-full p-3 mt-1  text-sm"
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
          >
            Ver Repositorio
          </a>
          <ul>
            <li>{props.stargazers_count.toLocaleString()} Estrellas</li>
            <li>{props.watchers_count.toLocaleString()} Seguidores</li>
          </ul>
        </div>

        <div className="flex items-center justify-between flex-wrap mt-5">
          <ul className="text-xs flex items-center justify-start">
          <li className="py-1 px-2 text-white bg-red-700 opacity-75 rounded-lg shadow inline-block mr-2">
          {props.language}
      </li>

            {props.topics &&
              props.topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <li className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
                    {topic}
                  </li>
                </React.Fragment>
              ))}
          </ul>

          <p>{props.open_issues} issues</p>
        </div>
      </article>
    </>
  )
}
