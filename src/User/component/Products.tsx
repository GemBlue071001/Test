import { useState, useEffect, useContext } from 'react'
import { db, storage, fetchImages } from '../../firestore-config'
import { ref, getDownloadURL } from 'firebase/storage'
import { collection, getDocs } from 'firebase/firestore'

export function Products() {
  const itemCollectionRef = collection(db, 'Items')

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemCollectionRef)
      var tmpItems = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

      for (var item of tmpItems) {
        console.log('GET IMAGE FOR ' + item.name)
        var imgUrl = await fetchImages(`Images/${item.imgName}`)
        item.imgUrl = imgUrl
      }

      console.log(tmpItems)
    }
    getItems()
  }, [])
}
