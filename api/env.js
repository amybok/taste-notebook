export default function handler(req, res) {
  res.json({
    url: process.env.SUPABASE_URL ?? null,
    hasPublishable: !!process.env.SUPABASE_PUBLISHABLE_KEY,
    hasSecret: !!process.env.SUPABASE_SECRET_KEY,
  });
}