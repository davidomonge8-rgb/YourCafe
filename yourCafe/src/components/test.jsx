import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hfolrfkuzobjgvdvwxag.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmb2xyZmt1em9iamd2ZHZ3eGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODg2NzUsImV4cCI6MjA4ODU2NDY3NX0.nqFQ-kq7C8VSL2hP1A3-PGSjbkXz2L8h1Tk3bnEUmTA"

const supabase = createClient(supabaseUrl, supabaseKey)

export default function Test() {
  const { data } = supabase.storage
    .from('images')
    .getPublicUrl('latte.jpg')

  return <img src={data.publicUrl} alt="My image" />
}