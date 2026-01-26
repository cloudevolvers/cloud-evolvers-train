# Blog Image Handling Guide

This guide provides detailed information about image handling in the xEvolve blog system.

## Image Storage Structure

Blog images are stored in the following locations:

- **Development Environment**: `.local/images/blog/`
- **Production Environment**: `/home/site/wwwroot/public/images/blog/`

Both locations are mapped to the URL path `/images/blog/` in your application.

## Image Categories and Fallbacks

If a blog post doesn't have an assigned image, the system will automatically use one of these fallback images based on the post's category:

| Category | Fallback Image Path |
|----------|---------------------|
| Azure Security | `/images/blog/security.jpg` |
| API Management | `/images/blog/api-management.jpg` |
| Identity | `/images/blog/identity.jpg` |
| DevOps | `/images/blog/devops.jpg` |
| Any other category | `/images/blog/default-blog-image.jpg` |

## Image Path Formats

The blog system supports the following image path formats:

1. **External URLs**: Full URLs starting with `http://` or `https://`
2. **Absolute Paths**: Paths starting with `/` like `/images/blog/my-image.jpg`
3. **Relative Paths**: Simple filenames like `my-image.jpg` (automatically converted to `/images/blog/my-image.jpg`)

## Image Best Practices

For optimal performance and user experience:

1. **Optimize images** before uploading (recommended max size: 5MB)
2. **Include alt text** for accessibility
3. **Use consistent aspect ratios** (16:9 or 4:3 recommended)
4. **Prefer .webp format** for better compression when possible
5. **Avoid external image URLs** for reliability

## Troubleshooting

If images don't appear correctly:

1. Check the console for image loading errors
2. Verify the image path in the blog post metadata
3. Ensure the image exists in the correct storage location
4. Check the image format is supported (jpg, jpeg, png, gif, webp)

## Technical Details

The system handles image paths through the following components:

1. **Server-side processing** in `src/app/blog/page.tsx`
2. **Client-side fallbacks** in `BlogImageWithFallback` component
3. **Express backend normalization** in the `/backend/blog` routes

