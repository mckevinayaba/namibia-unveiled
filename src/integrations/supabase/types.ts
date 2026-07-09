export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      booking_enquiries: {
        Row: {
          arrive_date: string
          budget: string
          created_at: string
          depart_date: string
          email: string
          id: string
          internal_notes: string | null
          name: string
          notes: string | null
          source_page: string | null
          status: Database["public"]["Enums"]["submission_status"]
          travellers: number
          trip_types: string[]
        }
        Insert: {
          arrive_date: string
          budget: string
          created_at?: string
          depart_date: string
          email: string
          id?: string
          internal_notes?: string | null
          name: string
          notes?: string | null
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          travellers: number
          trip_types?: string[]
        }
        Update: {
          arrive_date?: string
          budget?: string
          created_at?: string
          depart_date?: string
          email?: string
          id?: string
          internal_notes?: string | null
          name?: string
          notes?: string | null
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          travellers?: number
          trip_types?: string[]
        }
        Relationships: []
      }
      partner_applications: {
        Row: {
          contact_name: string
          created_at: string
          email: string
          id: string
          internal_notes: string | null
          message: string
          operation_name: string
          partner_type: string | null
          phone: string | null
          region: string
          source_page: string | null
          status: Database["public"]["Enums"]["submission_status"]
          website: string | null
        }
        Insert: {
          contact_name: string
          created_at?: string
          email: string
          id?: string
          internal_notes?: string | null
          message: string
          operation_name: string
          partner_type?: string | null
          phone?: string | null
          region: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          website?: string | null
        }
        Update: {
          contact_name?: string
          created_at?: string
          email?: string
          id?: string
          internal_notes?: string | null
          message?: string
          operation_name?: string
          partner_type?: string | null
          phone?: string | null
          region?: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          website?: string | null
        }
        Relationships: []
      }
      route_requests: {
        Row: {
          budget_range: string
          created_at: string
          days: number
          email: string
          id: string
          interest_areas: string[]
          internal_notes: string | null
          name: string
          notes: string | null
          preferred_regions: string[]
          remote_road_comfort: string
          route_of_interest: string | null
          season: string
          self_drive_or_guided: string
          source_page: string | null
          status: Database["public"]["Enums"]["submission_status"]
          travel_style: string
          vehicle_type: string
        }
        Insert: {
          budget_range: string
          created_at?: string
          days: number
          email: string
          id?: string
          interest_areas?: string[]
          internal_notes?: string | null
          name: string
          notes?: string | null
          preferred_regions?: string[]
          remote_road_comfort: string
          route_of_interest?: string | null
          season: string
          self_drive_or_guided: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          travel_style: string
          vehicle_type: string
        }
        Update: {
          budget_range?: string
          created_at?: string
          days?: number
          email?: string
          id?: string
          interest_areas?: string[]
          internal_notes?: string | null
          name?: string
          notes?: string | null
          preferred_regions?: string[]
          remote_road_comfort?: string
          route_of_interest?: string | null
          season?: string
          self_drive_or_guided?: string
          source_page?: string | null
          status?: Database["public"]["Enums"]["submission_status"]
          travel_style?: string
          vehicle_type?: string
        }
        Relationships: []
      }
      staff_users: {
        Row: {
          active: boolean
          created_at: string
          email: string
          id: string
          name: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          email: string
          id?: string
          name?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_active_staff: { Args: never; Returns: boolean }
    }
    Enums: {
      submission_status:
        | "new"
        | "reviewing"
        | "contacted"
        | "converted"
        | "archived"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      submission_status: [
        "new",
        "reviewing",
        "contacted",
        "converted",
        "archived",
      ],
    },
  },
} as const
