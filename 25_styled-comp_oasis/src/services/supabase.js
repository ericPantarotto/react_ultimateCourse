import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yljpcegklwdkugjneisu.supabase.co';

console.log(import.meta.env.VITE_SUPABASEKEY);
const supabaseKey = import.meta.env.VITE_SUPABASEKEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
