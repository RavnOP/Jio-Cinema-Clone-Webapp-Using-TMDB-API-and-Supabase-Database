-- Create tables and set up RLS policies

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (automatically created by Supabase Auth)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Watchlist table
CREATE TABLE IF NOT EXISTS watchlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content_id TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('movie', 'tv')),
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, content_id, content_type)
);

-- Continue watching table
CREATE TABLE IF NOT EXISTS continue_watching (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content_id TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('movie', 'tv')),
  title TEXT NOT NULL,
  poster_path TEXT,
  progress_seconds INTEGER DEFAULT 0,
  duration_seconds INTEGER DEFAULT 0,
  season_number INTEGER,
  episode_number INTEGER,
  last_watched TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, content_id, content_type, season_number, episode_number)
);

-- Likes table
CREATE TABLE IF NOT EXISTS likes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content_id TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('movie', 'tv')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, content_id, content_type)
);

-- Watch history table
CREATE TABLE IF NOT EXISTS watch_history (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content_id TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('movie', 'tv')),
  title TEXT NOT NULL,
  poster_path TEXT,
  watched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, content_id, content_type)
);

-- Comments table (new)
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content_id TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('movie', 'tv')),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create trigger function to update timestamps
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
CREATE TRIGGER update_profiles_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_comments_timestamp
BEFORE UPDATE ON comments
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- Set up Row Level Security (RLS)

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE watchlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE continue_watching ENABLE ROW LEVEL SECURITY;
ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE watch_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create policies for watchlist
CREATE POLICY "Users can view their own watchlist"
  ON watchlist FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert into their own watchlist"
  ON watchlist FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own watchlist"
  ON watchlist FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for continue_watching
CREATE POLICY "Users can view their own continue_watching"
  ON continue_watching FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert into their own continue_watching"
  ON continue_watching FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own continue_watching"
  ON continue_watching FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own continue_watching"
  ON continue_watching FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for likes
CREATE POLICY "Users can view their own likes"
  ON likes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert into their own likes"
  ON likes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own likes"
  ON likes FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for watch_history
CREATE POLICY "Users can view their own watch_history"
  ON watch_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert into their own watch_history"
  ON watch_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from their own watch_history"
  ON watch_history FOR DELETE
  USING (auth.uid() = user_id);

-- Create policies for comments
CREATE POLICY "Anyone can view comments"
  ON comments FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own comments"
  ON comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
  ON comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
  ON comments FOR DELETE
  USING (auth.uid() = user_id);

-- Create demo user (run this in SQL Editor, not in schema)
-- Note: This part needs to be run separately in the SQL Editor
/*
-- Insert demo user into auth.users
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  confirmation_sent_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data
)
VALUES (
  uuid_generate_v4(),
  'admin@gmail.com',
  crypt('admin@123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{"username":"admin"}'
)
RETURNING id;

-- Get the user ID and insert into profiles
INSERT INTO profiles (id, username, full_name, created_at, updated_at)
SELECT id, 'admin', 'Admin User', NOW(), NOW()
FROM auth.users
WHERE email = 'admin@gmail.com';
*/

