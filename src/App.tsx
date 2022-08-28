import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

function App() {

  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  
  console.log(data)
  return (
    <h1 className="text-lg">teste</h1>
  )
}

export default App
