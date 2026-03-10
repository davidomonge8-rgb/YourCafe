import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import '../componentCss/Card.css'

const supabase = createClient(
  'https://hfolrfkuzobjgvdvwxag.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb2xyZmt1em9iamd2ZHZ3eGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODg2NzUsImV4cCI6MjA4ODU2NDY3NX0.nqFQ-kq7C8VSL2hP1A3-PGSjbkXz2L8h1Tk3bnEUmTA'
)

type MenuItem = {
  id: string
  name: string
  price: number
  description: string
  image_path: string
}

const Card = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) {
        setError('Failed to load menu items.')
        console.error(error)
      } else {
        setMenuItems(data || [])
      }

      setLoading(false)
    }

    fetchMenuItems()
  }, [])

  const getImageUrl = (imagePath: string) => {
    const { data } = supabase.storage.from('images').getPublicUrl(imagePath)
    return data.publicUrl
  }

  if (loading) return <p>Loading menu...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='wholeCard'>
      {menuItems.map((item) => (
        <div key={item.id} id={item.name.toLowerCase().replace(/\s+/g, '-')}>
          <img src={getImageUrl(item.image_path)} alt={item.name} />

          <div id='description'>
            <h3>{item.name}:</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>

          <p><i>{item.description}</i></p>

          <button>Add to Order</button>
        </div>
      ))}
    </div>
  )
}

export default Card