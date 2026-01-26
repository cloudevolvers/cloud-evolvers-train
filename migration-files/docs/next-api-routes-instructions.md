15 Modular Next.js API Routes (Next.js 15, App Router)
This guide outlines how to create 15 Next.js API routes (10 CRUD + 5 extra) for "products" and "users" using the App Router in Next.js 15.2.4. It addresses common issues like dynamic route parameters, request body parsing, HTTP method mismatches, and error handling, with specific fixes for the context typing issue in dynamic routes.

Prerequisites
VS Code with GitHub Copilot (optional for autocompletion).
Next.js 15.2.4 project with app/api directory.
TypeScript enabled (recommended for type safety).
.env file for environment variables (e.g., NEXT_PUBLIC_APP_URL).
Key Fix for Dynamic Routes
In Next.js 15.2.4, the context: { params: { id: string } } typing for dynamic route parameters causes a type error: "Type '{ params: { id: string; }; }' is not a valid type for the function's second argument." To avoid this, extract dynamic parameters (e.g., userId, id) from req.nextUrl.pathname instead of using the context parameter. This bypasses the typing issue while maintaining functionality.

Steps
1. Shared Module for Handlers
Create reusable handlers to manage CRUD operations with consistent error handling.

File: lib/handlers.ts

typescript

Copy
// Shared handlers with error handling
export const getAll = async (data: any[]) => {
  if (!data.length) throw new Error('No data');
  return { json: () => data };
};

export const getById = async (data: any[], id: string) => {
  const item = data.find((item) => item.id === id);
  if (!item) throw new Error('Not found');
  return { json: () => item };
};

export const create = async (data: any[], newItem: any) => {
  if (!newItem?.name) throw new Error('Invalid input');
  const item = { id: `${data.length + 1}`, ...newItem };
  data.push(item);
  return { json: () => item };
};

export const update = async (data: any[], id: string, updates: any) => {
  const item = data.find((item) => item.id === id);
  if (!item) throw new Error('Not found');
  Object.assign(item, updates);
  return { json: () => item };
};

export const remove = async (data: any[], id: string) => {
  const index = data.findIndex((item) => item.id === id);
  if (index < 0) throw new Error('Not found');
  data.splice(index, 1);
  return { json: () => ({ success: true }) };
};
Notes:

Use string for id to match dynamic route parameters.
Include input validation and error throwing.
Avoid in-memory storage (data array) in production; replace with a database.
2. Generate 10 CRUD Routes
Create CRUD routes for "products" and "users" using the shared handlers. For dynamic routes, extract the id from req.nextUrl.pathname.

Products CRUD Routes
File: app/api/products/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/handlers';

let products: any[] = [];

export async function GET() {
  try {
    return NextResponse.json(await getAll(products).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json(await create(products, await req.json()).json(), { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
File: app/api/products/[id]/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';
import { getById, update, remove } from '@/lib/handlers';

let products: any[] = [];

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await getById(products, id).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await update(products, id, await req.json()).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await remove(products, id).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 404 });
  }
}
Users CRUD Routes
File: app/api/users/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';
import { getAll, create } from '@/lib/handlers';

let users: any[] = [];

export async function GET() {
  try {
    return NextResponse.json(await getAll(users).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json(await create(users, await req.json()).json(), { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
File: app/api/users/[id]/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';
import { getById, update, remove } from '@/lib/handlers';

let users: any[] = [];

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await getById(users, id).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await update(users, id, await req.json()).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) throw new Error('ID is required');
    return NextResponse.json(await remove(users, id).json());
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 404 });
  }
}
3. Add 5 Extra Routes
Create additional routes for enhanced functionality.

File: app/api/products/search/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q');
    return NextResponse.json(query ? [] : []); // Replace with actual search logic
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
File: app/api/products/bulk/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const items = await req.json();
    return NextResponse.json(items.map(() => ({}))); // Replace with actual bulk create logic
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
File: app/api/products/stats/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ count: 0 }); // Replace with actual stats logic
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}
File: app/api/users/active/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json([]); // Replace with actual active users logic
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 500 });
  }
}
File: app/api/users/login/route.ts

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({ token: '' }); // Replace with actual login logic
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Unknown error' }, { status: 400 });
  }
}
4. Configuration for Next.js 15
Ensure your project is set up to handle the routes correctly.

File: next.config.js

javascript

Copy
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nodeMiddleware: true, // Enable if using middleware
  },
};

export default nextConfig;
File: tsconfig.json

json

Copy
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/lib/*": ["lib/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
5. Tips for Implementation
Dynamic Routes: Always extract dynamic parameters using req.nextUrl.pathname.split('/').pop() to avoid type errors in Next.js 15.2.4.
Error Handling: Use try-catch blocks and return appropriate status codes (400, 404, 500).
Request Parsing: Safely parse req.json() or req.formData() within try-catch.
Testing: Use Postman or curl to test routes, ensuring correct method handling and parameter extraction.
GitHub Copilot: If using Copilot, comment with precise instructions (e.g., // GET /api/products) and review generated code for dynamic route parameter handling.
Production: Replace in-memory storage (products, users arrays) with a database (e.g., Prisma, MongoDB).
6. Example Usage
POST /api/profile-icons/[userId]:
bash

Copy
curl -X POST -F "image=@profile.png" http://localhost:3000/api/profile-icons/123
Response: { "success": true, "imageUrl": "/profile-images/123/profile-123456789.png", "message": "Image saved locally" }
GET /api/profile-icons/[userId]:
bash

Copy
curl http://localhost:3000/api/profile-icons/123
Response: { "success": true, "imageUrl": "/profile-images/123/profile-123456789.png", "source": "local" }
GET /api/products:
bash

Copy
curl http://localhost:3000/api/products
Response: { "json": [] }
7. Common Issues and Fixes
Dynamic Route Type Error: Avoid context: { params: { id: string } }. Use req.nextUrl.pathname instead.
Method Mismatch: Ensure each route exports only the intended HTTP methods (e.g., GET, POST).
Body Parsing Errors: Wrap req.json() or req.formData() in try-catch to handle malformed input.
Middleware Warning: Add experimental.nodeMiddleware in next.config.js if using middleware.
API Dashboard Debugging and Demo Mode (2025-05)

Demo Mode Logic
Demo mode for `/api/infra-status/apim` and `/api/api-dashboard/health-checks` is now only enabled if BOTH `DEMO=true` AND `HEALTH_CHECK_DEMO=true` are set in the environment.
If only `DEMO=true` is set, but `HEALTH_CHECK_DEMO` is not, the real Azure APIM and health checks will be used.
The API response will include a `demo: true` flag if demo mode is active.

Debugging APIM Configuration in Development
In development (`NODE_ENV !== 'production'`), the following routes will log the resolved APIM configuration and all relevant environment variables to the console:

`/api/infra-status/apim`
`/api/api-dashboard/api-operations/[apiId]`
This helps verify which APIM instance and credentials are being used, and why demo mode may be active.
If you are not seeing your real APIM, check that both `DEMO` and `HEALTH_CHECK_DEMO` are not set to `true` in your `.env.local`.
The log will include all relevant variables: `APIM_NAME`, `APIM_RG`, `AZURE_SUBSCRIPTION_ID`, and their alternates.

Health Checks
Health checks will only return mock/demo data if both `DEMO=true` and `HEALTH_CHECK_DEMO=true`.
Otherwise, real health checks will be performed against the configured endpoints.

API Operations Route
The `/api/api-dashboard/api-operations/[apiId]` route now logs all APIM config and environment variables in dev mode.
All TypeScript errors related to `any` have been fixed; only explicit types and type guards are used.

---

Always check the console output in development for detailed environment and config diagnostics if you are not seeing the expected APIM or health check data.

# API Dashboard Health Checks and Operations

## Health Checks Endpoint

The `/api/api-dashboard/health-checks` endpoint provides health status information for monitored APIs:

- **Purpose:** Returns the health status of each API configured in the system
- **Response Format:** 
  ```json
  {
    "healthChecks": [
      {
        "id": "customer-api-v1-health",
        "apiName": "customer-api-v1",
        "url": "https://example.com/customer-api/health",
        "status": "Healthy", // or "Unhealthy"
        "lastChecked": "2025-05-01T09:30:00.000Z",
        "responseTime": 150 // in milliseconds
      }
    ],
    "apim": {
      "name": "xevolve-dta-rg-platform",
      "resourceGroup": "xevolve-dta-rg",
      "subscription": "4a55c776-9f6b-4966-921e-c9f60e50652f"
    },
    "environment": "dev",
    "timestamp": "2025-05-01T09:30:15.000Z",
    "demo": false
  }
  ```

- **Demo Mode:** The endpoint returns mock data when both `DEMO=true` AND `HEALTH_CHECK_DEMO=true` environment variables are set

## API Operations Endpoint

The `/api/api-dashboard/api-operations/[apiId]` endpoint retrieves operations for a specific API:

- **Path Parameter:** `apiId` - The API identifier
- **Query Parameters:**
  - `page` - Page number (default: 1)
  - `pageSize` - Number of items per page (default: 100)
  - `search` - Optional search query to filter operations

- **Response Format:**
  ```json
  {
    "value": [
      {
        "name": "create-customer",
        "displayName": "Create Customer",
        "description": "Creates a new customer record",
        "method": "POST",
        "urlTemplate": "/customers",
        "templateParameters": [],
        "request": { /* request details */ },
        "responses": [ /* response details */ ],
        "policies": { /* policy details */ },
        "success": 1250,
        "clientError": 23,
        "serverError": 2,
        "total": 1275,
        "avgResponseTimeMs": 145
      }
    ],
    "count": 10,
    "page": 1,
    "pageSize": 100,
    "totalPages": 1
  }
  ```

- **Full API Response:** The endpoint returns all properties from the Azure API Management operation object plus additional statistics

API Dashboard Debugging and Demo Mode (2025-05)

Demo Mode Logic
Demo mode for `/api/infra-status/apim` and `/api/api-dashboard/health-checks` is now only enabled if BOTH `DEMO=true` AND `HEALTH_CHECK_DEMO=true` are set in the environment.
If only `DEMO=true` is set, but `HEALTH_CHECK_DEMO` is not, the real Azure APIM and health checks will be used.
The API response will include a `demo: true` flag if demo mode is active.

Debugging APIM Configuration in Development
In development (`NODE_ENV !== 'production'`), the following routes will log the resolved APIM configuration and all relevant environment variables to the console:

`/api/infra-status/apim`
`/api/api-dashboard/api-operations/[apiId]`
This helps verify which APIM instance and credentials are being used, and why demo mode may be active.
If you are not seeing your real APIM, check that both `DEMO` and `HEALTH_CHECK_DEMO` are not set to `true` in your `.env.local`.
The log will include all relevant variables: `APIM_NAME`, `APIM_RG`, `AZURE_SUBSCRIPTION_ID`, and their alternates.

Health Checks
Health checks will only return mock/demo data if both `DEMO=true` and `HEALTH_CHECK_DEMO=true`.
Otherwise, real health checks will be performed against the configured endpoints.

API Operations Route
The `/api/api-dashboard/api-operations/[apiId]` route now logs all APIM config and environment variables in dev mode.
All TypeScript errors related to `any` have been fixed; only explicit types and type guards are used.

---

Always check the console output in development for detailed environment and config diagnostics if you are not seeing the expected APIM or health check data.




