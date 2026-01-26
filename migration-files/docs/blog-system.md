# xEvolve Blog System Documentation

This documentation explains how the blog system in xEvolve works, how to add new blog posts, and how to use images with the blog system.

## Table of Contents

1. [System Overview](#system-overview)
2. [Blog File Structure](#blog-file-structure)
3. [Adding a New Blog Post](#adding-a-new-blog-post)
4. [Image Handling](#image-handling)
5. [Admin Interface](#admin-interface)
6. [Technical Reference](#technical-reference)

## System Overview

The xEvolve blog system is built on Next.js using the App Router. It includes:

- Blog listing page (`/blog`)
- Individual blog post pages (`/blog/[slug]`)
- Image handling with fallbacks
- Markdown support for content
- Admin interface for creating and editing blog posts

The system is designed to be flexible, allowing posts to be stored either:
- As markdown files in the file system
- In Azure Blob Storage
- In a database

## Blog File Structure

Blog posts can be authored in Markdown format with frontmatter for metadata.

### Directory Structure

```
/src
  /data
    /blog             # Local markdown blog files
      post-1.md
      post-2.md
  /app
    /blog
      /[slug]         # Dynamic blog post routes
        page.tsx
        BlogPostClient.tsx
      page.tsx        # Blog listing page
  /components
    BlogImage.tsx     # Blog image component with fallbacks
  /lib
    blog.ts           # Core blog functions
    blog-utils.ts     # Blog utility functions
    blog-storage.ts   # Storage integration
```

### Markdown Format

Blog posts use the following format:

```markdown
---
title: Your Blog Post Title
slug: your-blog-post-slug  
date: 2023-06-15
author: Author Name
category: Azure Security
tags: [azure, security, identity]
excerpt: A brief summary of your blog post
image: /images/blog/your-image.jpg
---

Your blog post content goes here. You can use **Markdown** formatting.

## Headers

- Lists
- Are supported

And much more!
```

## Adding a New Blog Post

### Method 1: Create a Markdown File

1. Create a new markdown file in `/src/data/blog/` with a `.md` extension
2. Add the frontmatter section with required metadata
3. Write your blog content in Markdown format
4. The system will automatically pick up the new post

### Method 2: Use the Admin Interface

1. Navigate to the admin interface at `/admin`
2. Click on "Blog Management"
3. Click "Add New Post"
4. Fill in the form with your blog post details
5. Use the rich text editor to create your content
6. Save the post

### Required Fields

| Field | Description | Required |
|-------|-------------|----------|
| title | Post title | Yes |
| slug | URL-friendly identifier | Yes |
| excerpt | Brief summary | Yes |
| content | Main blog content | Yes |
| date | Publication date | Yes |
| category | Blog category | No |
| image | Featured image | No |
| author | Post author | No |
| tags | Related topics | No |

## Image Handling

The blog system has a robust image handling system with multiple fallbacks.

### Image Path Format

Images should be stored in the following locations:

- `/public/images/blog/` - For static images
- Azure Blob Storage - For dynamically uploaded images

### Adding Images to Blog Posts

#### Method 1: Reference Public Images

In your Markdown frontmatter:

```yaml
image: /images/blog/your-image.jpg
```

In your Markdown content:

```markdown
![Image description](/images/blog/your-image.jpg)
```

#### Method 2: Use the Image Service

When using the admin interface:

1. Click the "Add Image" button in the editor
2. Choose an image from your computer or select from the image library
3. The image will be uploaded and inserted into your content

#### Fallback System

If an image is not found, the system will try:

1. The specific image path provided
2. A category-based image (e.g., 'Azure Security' maps to a specific image)
3. A keyword-based image (based on content in the title)
4. The default fallback image at `/public/images/blog/default-blog.jpg`

This ensures your blog posts always display with an appropriate image.

## Admin Interface

The admin interface provides a user-friendly way to manage blog content.

### Features

- **Blog Post Management**: Create, edit, delete blog posts
- **Image Management**: Upload, organize, and select images
- **Preview**: See how your post will look before publishing
- **Drafts**: Save posts as drafts before publishing

### Accessing the Admin Interface

Navigate to `/admin` and log in with your credentials.

## Technical Reference

### Core Components

- **BlogImageWithFallback**: A React component that displays blog images with automatic fallbacks
- **getBlogImageUrl**: A utility function that determines the best image URL for a post
- **processBlogContent**: A utility function that formats blog content for display
- **getAllBlogPosts**: Retrieves all blog posts from the storage system
- **getBlogPost**: Retrieves a specific blog post by slug

### Storage Integration

The blog system can pull data from multiple sources:

1. **Local Filesystem**: Markdown files in `/src/data/blog/`
2. **Azure Blob Storage**: Files stored in the configured blob container
3. **In-memory Cache**: For improved performance

### Image Service Integration

The image service is integrated with the blog system in several ways:

1. **Upload API**: `/api/images/upload` endpoint for adding new images
2. **Image Picker Component**: UI for selecting images in the admin interface
3. **Image Transformation**: Support for resizing and optimizing images
4. **Storage Management**: Organizing images in appropriate containers/folders

### Configuration

The blog system can be configured in `.env` files:

```
# Blog storage configuration
BLOG_CONTAINER=blog
IMAGES_CONTAINER=images
STORAGE_ACCOUNT_NAME=yourstorageaccount
STORAGE_ACCOUNT_KEY=yourstoragekey
```

---

## Quick Start Example

### Creating a New Blog Post

```markdown
---
title: Understanding Azure Managed Identities
slug: understanding-managed-identities
date: 2023-07-20
author: John Doe
category: Azure Security
tags: [azure, security, identity, managed-identity]
excerpt: Learn how to securely authenticate services without storing credentials in your code.
image: /images/blog/managed-identities.jpg
---

# Introduction to Managed Identities

Azure Managed Identities provide a secure way to authenticate to Azure services without storing credentials in your code.

## Benefits of Managed Identities

- No need to store credentials in code
- Automatic credential rotation
- Simplified security management

## Implementation Examples

Here's how you can use managed identities with Azure Functions:

```typescript
import { DefaultAzureCredential } from "@azure/identity";

// This will use the managed identity automatically
const credential = new DefaultAzureCredential();
const client = new SecretClient(vaultUrl, credential);
```

### Example Image Upload

1. Go to Admin > Images
2. Click "Upload New Image"
3. Select your image file
4. Add appropriate metadata (alt text, description)
5. Upload
6. The image URL will be generated as `/images/blog/your-uploaded-image.jpg`
7. Use this URL in your blog post's frontmatter
