import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://orlwybmkqjqxoslrrwbq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybHd5Ym1rcWpxeG9zbHJyd2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxODYyMDcsImV4cCI6MjA1NDc2MjIwN30.jrzvZvGLnRV_2ZVkvc24HvPImPpJK649xv46b4K_vKQ'
const supabaseClient = createClient(supabaseUrl, supabaseKey)

console.log('Client Supabase initialisé !');

async function getUsers() {
  const { data, error } = await supabase
    .from('users') // Nom de votre table
    .select('*');   // Sélectionne toutes les colonnes

  if (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return;
  }
  console.log('users:', data);
  return data;
}

