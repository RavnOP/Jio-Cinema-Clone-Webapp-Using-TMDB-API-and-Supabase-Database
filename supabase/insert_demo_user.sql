-- This script creates a demo user with the credentials:
-- Email: admin@gmail.com
-- Password: admin@123

-- First, check if the user already exists
DO $$
DECLARE
  user_exists BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'admin@gmail.com'
  ) INTO user_exists;

  IF NOT user_exists THEN
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
    );

    -- Get the user ID and insert into profiles
    INSERT INTO profiles (id, username, full_name, created_at, updated_at)
    SELECT id, 'admin', 'Admin User', NOW(), NOW()
    FROM auth.users
    WHERE email = 'admin@gmail.com';
    
    RAISE NOTICE 'Demo user created successfully';
  ELSE
    RAISE NOTICE 'Demo user already exists';
  END IF;
END $$;

