import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// local file path
const localFilePath = "/Users/kunalraj/Downloads/Kunal_Raj_cv_full.pdf" ;

// the filename that will always stay constant in Supabase
const remoteFileName = "resume.pdf";

async function uploadResume() {
  try {
    const fileBuffer = fs.readFileSync(localFilePath);

    // upload and overwrite the file
    const { data, error } = await supabase.storage
      .from("portfolio")
      .upload(remoteFileName, fileBuffer, {
        contentType: "application/pdf",
        upsert: true // IMPORTANT: allows overwriting without deleting first
      });

    if (error) {
      console.error("Upload error:", error);
      return;
    }

    console.log("Uploaded successfully:", data);

    // Permanent public URL
    const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/portfolio/${remoteFileName}`;
    console.log("Public URL:", publicUrl);

  } catch (err) {
    console.error("Error:", err);
  }
}

uploadResume();
