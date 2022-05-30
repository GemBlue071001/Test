import { useState, useEffect, useContext, FC } from 'react'
import { db, storage, fetchImages } from '../../firestore-config'
import { ref, getDownloadURL } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'

export const Products: React.FC = () => {
  const [items, setItems] = useState<any>([])
  const itemCollectionRef = collection(db, 'Items')

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemCollectionRef)
      var tmpItems: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))

      for (var item of tmpItems) {
        console.log('GET IMAGE FOR ' + item.name)
        var imgUrl = await fetchImages(`Images/${item.imgName}`)
        item.imgUrl = imgUrl
      }
      setItems(tmpItems)
      console.log(tmpItems)
    }
    getItems()
  }, [])

  return (
    <>
      {items.length > 0 &&
        items.map((item: any) => {
          return (
            <>
              <h3>{item.name} </h3>
              <h3>{item.price}$ </h3>
              <img className="CartImg" src={item.imgUrl} alt="shop img" />
            </>
          )
        })}
    </>
  )
}
