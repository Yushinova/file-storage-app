import { createClient } from '@supabase/supabase-js'
//создаем подключение к базе данных
export const supabase = createClient(
  'https://hlmifnolgghnjhmosohp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsbWlmbm9sZ2dobmpobW9zb2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MzA4MDUsImV4cCI6MjA1ODQwNjgwNX0.RC38TO1ciNhZmAZHBPZjj0pXeYzcnEEmnLX5DcviKxE'
)