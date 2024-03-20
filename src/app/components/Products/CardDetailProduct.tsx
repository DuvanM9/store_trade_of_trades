import { useParams } from "react-router-dom"


export const CardDetailProduct = () => {

    const params = useParams()

  return (
    <div>{params.product}</div>
  )
}
