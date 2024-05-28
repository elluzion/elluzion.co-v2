export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      artists: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      release_artists: {
        Row: {
          artist_id: number;
          release_id: number;
        };
        Insert: {
          artist_id: number;
          release_id: number;
        };
        Update: {
          artist_id?: number;
          release_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'public_release_artists_artist_id_fkey';
            columns: ['artist_id'];
            isOneToOne: false;
            referencedRelation: 'artists';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'public_release_artists_release_id_fkey';
            columns: ['release_id'];
            isOneToOne: false;
            referencedRelation: 'releases';
            referencedColumns: ['id'];
          },
        ];
      };
      release_downloads: {
        Row: {
          download_url: string;
          edit: string;
          format: Database['public']['Enums']['audio-filetype'];
          id: number;
          release_id: number;
        };
        Insert: {
          download_url: string;
          edit: string;
          format: Database['public']['Enums']['audio-filetype'];
          id?: number;
          release_id: number;
        };
        Update: {
          download_url?: string;
          edit?: string;
          format?: Database['public']['Enums']['audio-filetype'];
          id?: number;
          release_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'public_release_downloads_release_id_fkey';
            columns: ['release_id'];
            isOneToOne: false;
            referencedRelation: 'releases';
            referencedColumns: ['id'];
          },
        ];
      };
      release_downloads_v2: {
        Row: {
          edit: string;
          format: Database['public']['Enums']['audio-filetype'];
          id: number;
          release_id: number;
          url: string;
        };
        Insert: {
          edit: string;
          format: Database['public']['Enums']['audio-filetype'];
          id?: number;
          release_id: number;
          url: string;
        };
        Update: {
          edit?: string;
          format?: Database['public']['Enums']['audio-filetype'];
          id?: number;
          release_id?: number;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_release_downloads_new_release_id_fkey';
            columns: ['release_id'];
            isOneToOne: false;
            referencedRelation: 'releases_v2';
            referencedColumns: ['id'];
          },
        ];
      };
      release_links: {
        Row: {
          id: number;
          platform: string;
          release_id: number;
          url: string;
        };
        Insert: {
          id?: number;
          platform: string;
          release_id: number;
          url: string;
        };
        Update: {
          id?: number;
          platform?: string;
          release_id?: number;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_release_links_release_id_fkey';
            columns: ['release_id'];
            isOneToOne: false;
            referencedRelation: 'releases';
            referencedColumns: ['id'];
          },
        ];
      };
      release_links_v2: {
        Row: {
          id: number;
          release_id: number;
          url: string;
        };
        Insert: {
          id?: number;
          release_id: number;
          url: string;
        };
        Update: {
          id?: number;
          release_id?: number;
          url?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'public_release_links_new_release_id_fkey';
            columns: ['release_id'];
            isOneToOne: false;
            referencedRelation: 'releases_v2';
            referencedColumns: ['id'];
          },
        ];
      };
      releases: {
        Row: {
          art_url: string;
          description: string | null;
          genre: string;
          id: number;
          key: string | null;
          label: string | null;
          release_date: string;
          tempo: number | null;
          title: string;
          type: string;
          written_id: string;
        };
        Insert: {
          art_url: string;
          description?: string | null;
          genre: string;
          id?: number;
          key?: string | null;
          label?: string | null;
          release_date: string;
          tempo?: number | null;
          title: string;
          type: string;
          written_id: string;
        };
        Update: {
          art_url?: string;
          description?: string | null;
          genre?: string;
          id?: number;
          key?: string | null;
          label?: string | null;
          release_date?: string;
          tempo?: number | null;
          title?: string;
          type?: string;
          written_id?: string;
        };
        Relationships: [];
      };
      releases_v2: {
        Row: {
          art_url: string;
          artists: string[];
          description: string | null;
          genre: string;
          id: number;
          key: string | null;
          label: string | null;
          permalink: string;
          release_date: string;
          tempo: number | null;
          title: string;
          type: string;
        };
        Insert: {
          art_url?: string;
          artists: string[];
          description?: string | null;
          genre: string;
          id?: number;
          key?: string | null;
          label?: string | null;
          permalink: string;
          release_date: string;
          tempo?: number | null;
          title: string;
          type: string;
        };
        Update: {
          art_url?: string;
          artists?: string[];
          description?: string | null;
          genre?: string;
          id?: number;
          key?: string | null;
          label?: string | null;
          permalink?: string;
          release_date?: string;
          tempo?: number | null;
          title?: string;
          type?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      delete_claim: {
        Args: {
          uid: string;
          claim: string;
        };
        Returns: string;
      };
      get_claim: {
        Args: {
          uid: string;
          claim: string;
        };
        Returns: Json;
      };
      get_claims: {
        Args: {
          uid: string;
        };
        Returns: Json;
      };
      get_my_claim: {
        Args: {
          claim: string;
        };
        Returns: Json;
      };
      get_my_claims: {
        Args: Record<PropertyKey, never>;
        Returns: Json;
      };
      is_claims_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      set_claim: {
        Args: {
          uid: string;
          claim: string;
          value: Json;
        };
        Returns: string;
      };
    };
    Enums: {
      'audio-filetype': 'mp3' | 'wav';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;
