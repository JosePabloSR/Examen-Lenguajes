'use client'
import { useState, useEffect } from "react"
import Loading from "./Loading"
import Profile from "./profile"



// const singleUser = `https://api.github.com/users/JosePabloSR`
// const repos = `https://api.github.com/users/JosePabloSR/repos?`
// https://api.github.com/users/JosePabloSR/repos?page=1&per_page=10&sort=updated

function MyGithub() {
    const [items, setItems] = useState([])
    const [user] = useState("JosePabloSR")
  
     useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${user}/repos`);
        const data = await res.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRepos();
  }, [user]);

  return (


    <>
      <div className="pt-10">
        <h1 className="mb-10 font-bold text-2xl">
          Viewing {user}'s repositories
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

export default MyGithub;