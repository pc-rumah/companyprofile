import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.error('Error: .env.local file not found!');
  process.exit(1);
}

const envFile = fs.readFileSync(envPath, 'utf8');
const env = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let value = match[2] || '';
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
    env[match[1]] = value.trim();
  }
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const bucketName = env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET || 'videos';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY missing in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);
const videosDir = path.resolve(process.cwd(), 'public', 'video');

if (!fs.existsSync(videosDir)) {
  console.error(`Error: Directory not found: ${videosDir}`);
  process.exit(1);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function uploadAll() {
  const files = fs.readdirSync(videosDir).filter(f => f.endsWith('.mp4'));

  console.log(`\n========================================`);
  console.log(`Starting Supabase Video Upload`);
  console.log(`Target Bucket: ${bucketName}`);
  console.log(`Total Videos Found: ${files.length}`);
  console.log(`========================================\n`);

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < files.length; i++) {
    const fileName = files[i];
    const filePath = path.join(videosDir, fileName);
    const stats = fs.statSync(filePath);
    const fileSize = formatBytes(stats.size);

    process.stdout.write(`[${i + 1}/${files.length}] Uploading ${fileName} (${fileSize})... `);

    try {
      const fileBuffer = fs.readFileSync(filePath);
      const { error } = await supabase.storage.from(bucketName).upload(fileName, fileBuffer, {
        contentType: 'video/mp4',
        upsert: true,
      });

      if (error) {
        console.log(`\x1b[31mFAILED\x1b[0m`);
        console.error(`   Reason: ${error.message}`);
        failCount++;
      } else {
        const { data: urlData } = supabase.storage.from(bucketName).getPublicUrl(fileName);
        console.log(`\x1b[32mSUCCESS\x1b[0m`);
        console.log(`   URL: ${urlData.publicUrl}`);
        successCount++;
      }
    } catch (err) {
      console.log(`\x1b[31mFAILED\x1b[0m`);
      console.error(`   Error: ${err.message}`);
      failCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Upload Completed!`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`========================================\n`);
}

uploadAll();
