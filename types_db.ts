export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      events: {
        Row: {
          created_at: string
          date: string | null
          description: string | null
          host_data: Json | null
          host_user_id: string | null
          id: number
          images: string[] | null
          location: string | null
          registration_link: string | null
          slug: string | null
          tags: string[] | null
          time: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          date?: string | null
          description?: string | null
          host_data?: Json | null
          host_user_id?: string | null
          id?: number
          images?: string[] | null
          location?: string | null
          registration_link?: string | null
          slug?: string | null
          tags?: string[] | null
          time?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          date?: string | null
          description?: string | null
          host_data?: Json | null
          host_user_id?: string | null
          id?: number
          images?: string[] | null
          location?: string | null
          registration_link?: string | null
          slug?: string | null
          tags?: string[] | null
          time?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_events_host_user_id_fkey"
            columns: ["host_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      feedbacks: {
        Row: {
          contact_email: string | null
          created_at: string
          feedback: string | null
          full_name: string | null
          id: number
        }
        Insert: {
          contact_email?: string | null
          created_at?: string
          feedback?: string | null
          full_name?: string | null
          id?: number
        }
        Update: {
          contact_email?: string | null
          created_at?: string
          feedback?: string | null
          full_name?: string | null
          id?: number
        }
        Relationships: []
      }
      notes: {
        Row: {
          branch: string | null
          course: Database["public"]["Enums"]["course"]
          created_at: string
          id: number
          link: string | null
          notes: Json | null
          semester: number | null
          subject: string | null
          title: string | null
        }
        Insert: {
          branch?: string | null
          course: Database["public"]["Enums"]["course"]
          created_at?: string
          id?: number
          link?: string | null
          notes?: Json | null
          semester?: number | null
          subject?: string | null
          title?: string | null
        }
        Update: {
          branch?: string | null
          course?: Database["public"]["Enums"]["course"]
          created_at?: string
          id?: number
          link?: string | null
          notes?: Json | null
          semester?: number | null
          subject?: string | null
          title?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          branch: string
          college: string
          email: string
          full_name: string | null
          id: string
          semester: number
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          branch: string
          college: string
          email: string
          full_name?: string | null
          id: string
          semester: number
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          branch?: string
          college?: string
          email?: string
          full_name?: string | null
          id?: string
          semester?: number
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      branch:
        | "CSE"
        | "ECE"
        | "EEE"
        | "ME"
        | "IT"
        | "CST"
        | "AIML"
        | "AIDS"
        | "MAE"
        | "CE"
        | "IoT"
        | "EE"
        | "ICE"
        | "ITE"
      course: "bba" | "btech"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
