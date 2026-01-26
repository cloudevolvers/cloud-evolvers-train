# xEvolve Blog System Documentation

This document provides an overview of the xEvolve blog system architecture, explains key components and features, and offers guidance on common tasks and troubleshooting.

## System Architecture

The xEvolve blog system consists of:

1. **Frontend (Next.js 15.2)**: 
   - Renders blog posts and listings
   - Handles client-side interactions
   - Located in `src/app/blog`

2. **Backend (Express)**: 
   - Provides blog data via REST API
   - Handles CRUD operations
   - Manages images and content
   - Located in `/routes/blog.js`

3. **Data Storage**:
   - Markdown files stored in server filesystem
   - Image files stored in `/public/images/blog`
   - Local caching for improved performance

## Key Components

### Frontend Components

- `page.tsx`: Main blog listing page
- `[slug]/page.tsx`: Individual blog post page
- `BlogList.tsx`: Reusable component for displaying blog post listings
- `BlogPostClient.tsx`: Client component for rendering individual posts

### Backend Routes

- `GET /backend/blog`: Fetch all blog posts
- `GET /backend/blog/:slug`: Fetch a specific blog post by slug
- `POST /backend/blog`: Create a new blog post
- `PUT /backend/blog/:id`: Update an existing blog post
- `DELETE /backend/blog/:id`: Delete a blog post
- `POST /backend/blog/update-image`: Update a blog post's image

## Image Handling

### Image Paths and Standards

Blog post images follow a standardized path structure for consistency:

1. **External Images**: URLs starting with `http` or `https`
2. **Absolute Paths**: Paths starting with `/`, typically `/images/blog/...`
3. **Relative Paths**: Automatically converted to `/images/blog/filename.jpg`

Images are normalized throughout the application to ensure consistent display.

### Image Storage Locations

The physical storage location of images depends on the environment:

- **Development Mode** (`LOCAL_DEV=true`): Images are stored in `.local/images/blog/`
- **Production Mode** (`LOCAL_DEV=false`): Images are stored in `/home/site/wwwroot/public/images/blog/`

Regardless of the physical storage location, all images are accessible through the URL path `/images/blog/filename.jpg`.

### Category-Based Image Fallbacks

If a post doesn't have an image, a fallback image based on its category will be used:

- Azure Security: `/images/blog/security.jpg`
- API Management: `/images/blog/api-management.jpg`
- Identity: `/images/blog/identity.jpg`
- DevOps: `/images/blog/devops.jpg`
- Default: `/images/blog/default-blog-image.jpg`

### Image Upload Workflow

Images can be uploaded through:

1. **Admin Panel**: Using the blog post editor
2. **Direct Upload**: Using the dedicated image uploader in admin/images
3. **External Sources**: Using URLs from Unsplash, Pexels, or Pixabay

Uploaded images are stored in the `/public/images/blog` directory and referenced in blog posts.

## Blog Post Format

Blog posts are stored as Markdown files with frontmatter metadata:

```yaml
---
id: blog-1234567890
title: Your Blog Post Title
description: A short description of the post
date: 2023-01-01T00:00:00.000Z
author: Author Name
tags: [tag1, tag2, tag3]
image: /images/blog/your-image.jpg
imageAlt: Alt text for accessibility
excerpt: A brief excerpt for previews
category: Category Name
---

Your markdown content goes here...
```

## Common Tasks

### Adding a New Blog Post

1. Navigate to the admin panel at `/admin/blog`
2. Click "Create New Post"
3. Fill in the required fields
4. Add an image (upload, search, or use URL)
5. Save the post

### Updating Blog Images

1. Go to the admin panel at `/admin/blog`
2. Find the post you want to update
3. Click the "Update Image" button
4. Upload a new image or select one from search
5. Click "Done" to save changes

### Troubleshooting Image Display

If images aren't displaying properly:

1. Check the browser console for errors
2. Verify the image path in the blog post metadata
3. Ensure the image file exists in the `/public/images/blog` directory
4. Try clearing your browser cache
5. Check that the image format is supported (jpg, jpeg, png, gif, webp)

## Performance Considerations

- Blog posts are cached for 5 minutes on the server
- Images should be optimized before upload (recommended max size: 5MB)
- External images may impact load time and are less reliable

## Local Development

When developing locally (`LOCAL_DEV=true`), images are stored in the `.local/images/blog` directory. In production, images are stored in the Linux web app's storage path at `/home/site/wwwroot/public/images/blog`. The system automatically handles these differences to provide a consistent experience.

To set up a new environment:

1. Create the `.local` directory in your project root
2. Copy default category images to `.local/images/blog/`
3. Ensure the environment variable `LOCAL_DEV=true` is set
4. Make sure directory permissions allow the server to write to these locations
