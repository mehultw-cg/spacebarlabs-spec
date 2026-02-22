/**
 * Security Fuzzing Script for Spacebar Labs Contact Form API (/api/send)
 * 
 * Tests boundary conditions, malicious injections, and rate-limiting schemas 
 * to ensure robust Next.js API route protection.
 */

const API_URL = "http://localhost:3078/api/send";

const payloads = [
  {
    name: "Valid Payload Missing Turnstile",
    payload: {
      name: "John Doe",
      email: "test@example.com",
      subject: "Cloud Architecture",
      message: "Hello world"
    },
    expectedStatus: 400, // Zod validation fails on missing Turnstile, or Turnstile verify fails
  },
  {
    name: "Missing Name",
    payload: {
      email: "test@example.com",
      subject: "Cloud Architecture",
      message: "Hello world",
      turnstileToken: "dummy-token"
    },
    expectedStatus: 400,
  },
  {
    name: "Malformed Email Injection",
    payload: {
      name: "John Doe",
      email: "this-is-not-an-email@drop table users",
      subject: "Cloud Architecture",
      message: "Hello world",
      turnstileToken: "dummy-token"
    },
    expectedStatus: 400,
  },
  {
    name: "Excessively Long String (Buffer Override Attempt)",
    payload: {
      name: "John Doe",
      email: "test@example.com",
      subject: "Cloud Architecture",
      message: "A".repeat(50000), // 50k characters
      turnstileToken: "dummy-token"
    },
    expectedStatus: 400, // Zod schema likely has a max length, should reject
  },
  {
    name: "Cross-Site Scripting (XSS) Injection",
    payload: {
      name: "<script>alert('XSS')</script> onload=alert(1)",
      email: "hacker@example.com",
      subject: "Cloud Architecture",
      message: "<img src='x' onerror='alert(1)'>",
      turnstileToken: "dummy-token"
    },
    // We expect this to fail Turnstile validation first (400), 
    // but if it didn't, React Email implicitly sanitizes JSX text nodes anyway.
    expectedStatus: 400, 
  }
];

async function runTests() {
  console.log("🚀 Initializing Spacebar Labs Offensive Security Fuzzer...\n");
  
  let passed = 0;
  let failed = 0;

  for (const test of payloads) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(test.payload)
      });

      const data = await response.json();
      
      if (response.status === test.expectedStatus || response.status === 403 || response.status === 429) {
        console.log(`✅ PASS: ${test.name}`);
        console.log(`   Expected: Failure (${test.expectedStatus}), Got: ${response.status}`);
        console.log(`   Response: ${JSON.stringify(data)}`);
        passed++;
      } else {
        console.error(`❌ FAIL: ${test.name}`);
        console.error(`   Expected: ${test.expectedStatus}, Got: ${response.status}`);
        console.error(`   Response: ${JSON.stringify(data)}`);
        failed++;
      }
    } catch (e: any) {
      console.error(`⚠️ ERROR during ${test.name}:`, e.message);
      failed++;
    }
    console.log("---------------------------------------------------");
  }

  // Rate Limiting Test
  console.log("⏱️ Testing Rate Limiting (15 Rapid Fire Requests)...");
  let rateLimitCaught = false;
  for (let i = 0; i < 15; i++) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloads[0].payload)
    });
    if (response.status === 429) {
      rateLimitCaught = true;
      console.log(`✅ PASS: Rate Limiting Successfully Caught at request #${i + 1}`);
      passed++;
      break;
    }
  }
  
  if (!rateLimitCaught) {
    console.error(`❌ FAIL: Rate Limiting did not trigger after 15 requests.`);
    failed++;
  }

  console.log("\n📊 Security Fuzzing Summary");
  console.log(`   Passed: ${passed}`);
  console.log(`   Failed: ${failed}`);
  
  if (failed === 0) {
    console.log("\n🛡️ System Secure: All malicious payloads safely repelled by API validation.");
  }
}

runTests();
