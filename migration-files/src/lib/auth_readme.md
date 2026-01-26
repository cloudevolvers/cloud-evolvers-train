PLEASE SEE THIS AS AN EXAMPLE

Setting Up JWT Authentication in Next.js 15.3
This documentation provides a comprehensive guide to implementing JSON Web Token (JWT) authentication in a Next.js 15.3 application using the jsonwebtoken library. It includes step-by-step instructions, code examples, and best practices for securing your application.

Table of Contents
Overview
JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. In this guide, we’ll use JWT for authentication in a Next.js 15.3 application. The jsonwebtoken library will be used to sign, verify, and decode tokens. Key features include:

Access Tokens: Short-lived tokens for accessing protected resources.
Refresh Tokens: Long-lived tokens for obtaining new access tokens.
Secure Storage: Proper handling of tokens on the client and server.
Middleware: Protecting API routes and pages.
Next.js 15.3 Features: Leveraging App Router, Server Components, and API routes.
This implementation assumes a basic understanding of Next.js, TypeScript, and authentication concepts.

Prerequisites
Node.js: Version 18.x or higher.
Next.js: Version 15.3.
TypeScript: Recommended for type safety.
Database: Any database (e.g., MongoDB, PostgreSQL) for storing user data.
Basic Knowledge: Familiarity with Next.js App Router, API routes, and TypeScript.
Installation
Create a Next.js Project (if not already created):

bash

Copy
npx create-next-app@15.3 my-jwt-auth-app
cd my-jwt-auth-app
Install Dependencies:
Install the jsonwebtoken library and other necessary packages.

bash

Copy
npm install jsonwebtoken bcryptjs
npm install --save-dev @types/jsonwebtoken @types/bcryptjs
jsonwebtoken: For signing and verifying JWTs.
bcryptjs: For hashing passwords.
@types/*: TypeScript type definitions.
Set Up Environment Variables:
Create a .env.local file in the root of your project to store sensitive information.

env

Copy
JWT_SECRET=your-very-long-and-secure-secret-key
JWT_REFRESH_SECRET=your-very-long-and-secure-refresh-secret-key
ACCESS_TOKEN_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
JWT_SECRET: Secret key for signing access tokens.
JWT_REFRESH_SECRET: Secret key for signing refresh tokens.
ACCESS_TOKEN_EXPIRES_IN: Access token expiration (e.g., 15 minutes).
REFRESH_TOKEN_EXPIRES_IN: Refresh token expiration (e.g., 7 days).
Project Structure
A suggested structure for your Next.js project to keep the code organized:

text

Copy
my-jwt-auth-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   ├── register/
│   │   │   │   └── route.ts
│   │   │   ├── refresh/
│   │   │   │   └── route.ts
│   │   ├── protected/
│   │   │   └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
├── lib/
│   ├── jwt.ts
│   ├── db.ts
├── middleware.ts
├── models/
│   ├── user.ts
├── types/
│   ├── jwt.ts
├── .env.local
├── package.json
├── tsconfig.json
Configuration
1. Setting Up the Database
For this example, we’ll assume you’re using MongoDB with Mongoose. Adjust the setup based on your database choice.

Install Mongoose:

bash

Copy
npm install mongoose
Create a database connection utility in lib/db.ts:

typescript

Copy
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default connectDB;
2. Environment Variables
Ensure your .env.local file is properly configured and loaded. Use a library like dotenv if necessary, though Next.js handles .env.local natively.

Implementing JWT Authentication
Creating Utility Functions
Create a lib/jwt.ts file to handle JWT-related operations.

typescript

Copy
import jwt from 'jsonwebtoken';
import type { SignOptions, JwtPayload } from 'jsonwebtoken';

interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
}

export const signToken = (
  payload: TokenPayload,
  options: SignOptions = {}
): string => {
  const secret = options.secret || process.env.JWT_SECRET!;
  return jwt.sign(payload, secret, {
    expiresIn: options.expiresIn || process.env.ACCESS_TOKEN_EXPIRES_IN,
    ...options,
  });
};

export const signRefreshToken = (
  payload: TokenPayload,
  options: SignOptions = {}
): string => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
    ...options,
  });
};

export const verifyToken = (
  token: string,
  secret: string = process.env.JWT_SECRET!
): TokenPayload => {
  try {
    return jwt.verify(token, secret) as TokenPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return verifyToken(token, process.env.JWT_REFRESH_SECRET!);
};
signToken: Signs an access token with a default expiration.
signRefreshToken: Signs a refresh token with a longer expiration.
verifyToken: Verifies an access token.
verifyRefreshToken: Verifies a refresh token.
User Model and Database Setup
Create a models/user.ts file for the user schema.

typescript

Copy
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
API Routes for Authentication
Next.js 15.3 uses the App Router, so we’ll create API routes in the app/api directory.

Register Endpoint
Create app/api/auth/register/route.ts:

typescript

Copy
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User } from '@/models/user';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      );
    }

    const user = new User({ email, password });
    await user.save();

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
Login Endpoint
Create app/api/auth/login/route.ts:

typescript

Copy
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { User } from '@/models/user';
import { signToken, signRefreshToken } from '@/lib/jwt';

export async function POST(request: Request) {
  try {
    await connectDB();
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const payload = { userId: user._id.toString(), email: user.email };
    const accessToken = signToken(payload);
    const refreshToken = signRefreshToken(payload);

    return NextResponse.json(
      { accessToken, refreshToken },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
Protected Routes
Create app/api/protected/route.ts:

typescript

Copy
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header missing or invalid' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    const payload = verifyToken(token);

    return NextResponse.json(
      { message: 'This is a protected route', user: payload },
      { status: 200 }
    );
  } catch (error) {
    console.error('Protected route error:', error);
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401 }
    );
  }
}
Refresh Token Endpoint
Create app/api/auth/refresh/route.ts:

typescript

Copy
import { NextResponse } from 'next/server';
import { verifyRefreshToken, signToken } from '@/lib/jwt';

export async function POST(request: Request) {
  try {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token is required' },
        { status: 400 }
      );
    }

    const payload = verifyRefreshToken(refreshToken);
    const newAccessToken = signToken({
      userId: payload.userId,
      email: payload.email,
    });

    return NextResponse.json(
      { accessToken: newAccessToken },
      { status: 200 }
    );
  } catch (error) {
    console.error('Refresh token error:', error);
    return NextResponse.json(
      { error: 'Invalid or expired refresh token' },
      { status: 401 }
    );
  }
}
Middleware for Protected Routes
Create middleware.ts to protect specific routes or pages:

typescript

Copy
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

export function middleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return NextResponse.json(
      { error: 'Authorization header missing' },
      { status: 401 }
    );
  }

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid or expired token' },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ['/api/protected/:path*', '/dashboard/:path*'],
};
This middleware protects all routes under /api/protected and /dashboard.

Client-Side Authentication
For client-side authentication, you can use a library like axios or the native fetch API to interact with your authentication endpoints.

Example using fetch in a React component (app/login/page.tsx):

typescript

Copy
'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store tokens in localStorage or cookies
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
Note: Storing tokens in localStorage is shown for simplicity. For production, consider using HttpOnly cookies for better security (see ).

Security Considerations
Secure JWT Secrets:
Use strong, unique secrets for JWT_SECRET and JWT_REFRESH_SECRET.
Store them securely in environment variables, not in code.
Token Storage:
Avoid storing tokens in localStorage due to XSS vulnerabilities.
Use HttpOnly, Secure, SameSite=Strict cookies for storing tokens.
Example for setting cookies in the login endpoint:
typescript

Copy
const response = NextResponse.json({ message: 'Login successful' });
response.cookies.set('accessToken', accessToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 15 * 60, // 15 minutes
});
return response;
Token Expiration:
Keep access tokens short-lived (e.g., 15 minutes).
Use refresh tokens for longer sessions, but ensure they are securely stored.
HTTPS:
Always use HTTPS in production to encrypt data in transit.
Input Validation:
Validate and sanitize all user inputs to prevent injection attacks.
Use libraries like zod or yup for schema validation.
Rate Limiting:
Implement rate limiting on authentication endpoints to prevent brute-force attacks.
Use a library like express-rate-limit or a CDN-based solution.
CORS:
Configure CORS properly if your API is accessed from a different origin.
Use Next.js’s built-in CORS support or a library like cors.
Error Handling:
Avoid leaking sensitive information in error messages.
Log errors securely without exposing stack traces to clients.
Best Practices
Type Safety:
Use TypeScript to define token payloads and API responses.
Example payload type:
typescript

Copy
interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
}
Modular Code:
Separate concerns (e.g., JWT utilities, database logic, API routes).
Use reusable functions for token management.
Refresh Token Rotation:
Implement refresh token rotation to issue a new refresh token on each use.
Store refresh tokens in the database and invalidate old ones.
Logging:
Log authentication attempts and failures for monitoring.
Use a logging service like Winston or Sentry in production.
Testing:
Write unit tests for JWT utilities and API routes.
Use tools like Jest and Supertest.
Testing the Implementation
Start the Development Server:

bash

Copy
npm run dev
Test Registration:
Use a tool like Postman or cURL:

bash

Copy
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"password123"}'
Test Login:

bash

Copy
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@example.com","password":"password123"}'
Save the accessToken and refreshToken from the response.

Test Protected Route:

bash

Copy
curl -X GET http://localhost:3000/api/protected \
-H "Authorization: Bearer <accessToken>"
Test Refresh Token:

bash

Copy
curl -X POST http://localhost:3000/api/auth/refresh \
-H "Content-Type: application/json" \
-d '{"refreshToken":"<refreshToken>"}'
Test Middleware:
Visit http://localhost:3000/dashboard with and without a valid token in the Authorization header.

Troubleshooting
Invalid Token Error:
Ensure the JWT_SECRET matches between signing and verification.
Check if the token has expired.
Database Connection Issues:
Verify the MONGODB_URI in .env.local.
Ensure the database server is running.
CORS Errors:
If accessing the API from a different origin, configure CORS in your API routes.
Middleware Not Triggering:
Check the matcher configuration in middleware.ts.
Ensure the route path matches the pattern.
Conclusion
This guide provides a complete implementation of JWT authentication in Next.js 15.3 using the jsonwebtoken library. By following these steps, you can:

Register and authenticate users securely.
Protect API routes and pages with middleware.
Handle token refresh for seamless user sessions.
Apply security best practices to safeguard your application.
For production, consider enhancing this setup with refresh token rotation, advanced rate limiting, and a robust logging system. Always keep security at the forefront when handling authentication.

If you need further clarification or additional features (e.g., password reset, OAuth integration), feel free to ask!