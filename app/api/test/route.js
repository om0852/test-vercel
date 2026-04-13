import { NextResponse } from "next/server";

const jobs = {};

export async function POST(req) {
  let body = {};
  try {
    body = await req.json();
  } catch (e) {
    console.log("No valid JSON body provided, using defaults");
  }
  console.log("Received request body:", body);
  const { count } = body;
  console.log(`Received count: ${count}`);
  const jobId = Date.now().toString();

  // initialize job
  jobs[jobId] = {
    status: "processing",
    progress: 0,
  };

  // 🔥 background task (non-blocking)
  simulateHeavyTask(jobId,count);

  return NextResponse.json({ jobId });
}

// background function
async function simulateHeavyTask(jobId,count) {
  let startDate = new Date();
  console.log(`Job ${jobId} started at ${startDate.toISOString()}`);
  for (let i = 0; i <= count; i++) {
    await new Promise((res) => setTimeout(res, 1000)); // simulate work
    console.log(`Job ${jobId} progress: ${i}%`);
    jobs[jobId].progress = i;

    if (i === 100) {
      jobs[jobId].status = "done";
    }
  }
  let endDate = new Date();
  console.log(`Job ${jobId} completed at ${endDate.toISOString()}`);
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("jobId");

  if (!jobs[jobId]) {
    return NextResponse.json({ error: "Invalid jobId" });
  }

  return NextResponse.json(jobs[jobId]);
}
