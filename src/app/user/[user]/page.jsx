import React from 'react'

const page = () => {
    const []
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/{id}").then((res) => {
          console.log("Hello", res.data);
          setCourses(res.data);
        });
      }, []);
  return (
    <div>
        User
    </div>
  )
}

export default page
