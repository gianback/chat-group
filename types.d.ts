import { Database } from './types/supabase'

export type Room = Database['public']['Tables']['rooms']['Row']
export type User = Database['public']['Tables']['users']['Row']
