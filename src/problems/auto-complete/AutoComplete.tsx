import { useEffect, useState } from "react"
import "./index.css"

const AutoComplete = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [chips, setChips] = useState<string[]>([])
  const [show, setShow] = useState(false)
  const [cache, setCache] = useState<any>({});

  useEffect(() => {
    if (cache[search]) {
      console.log("CACHED DATA::", cache[search])
      return setData(cache[search]);
    }

    const timer = setTimeout(() => {
      if (search) {
        const users = fetchData(`https://dummyjson.com/recipes/search?q=${search}`);
        users.then((data) => {
          console.log("API DATA::", data.recipes)
          setData(data.recipes)
          setCache((prev: any) => ({ ...prev, [search]: data.recipes }))
        });
      }
    }, 300);

    return () => {
      clearTimeout(timer)
    }
  }, [search]);

  const fetchData = async (url: string) => {
    return await fetch(url)
      .then(res => res.json())
      .then(res => res);
  }

  return (
    <>
      <div>AutoComplete</div>
      <div>
        <p>All users:</p>
      </div>
      <div className="auto-complete-wrapper">
        <input type="text" placeholder="Search names" onChange={(e) => setSearch(e.target.value)} onFocus={() => setShow(true)} onBlur={() => setShow(false)} />
        {show &&
          <div className="auto-complete-results">
            {data && data.map((u: any, i) =>
              <p key={i}>{u.name}</p>
            )}
          </div>
        }
      </div>
    </>
  )
}
export default AutoComplete