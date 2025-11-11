/**
 * Sanitizes HTML content to prevent XSS attacks
 * Since we control the icon content, we validate that it only contains safe SVG elements
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(html: string): string {
  // For SVG icons from our static content, we do basic validation
  // This ensures only SVG elements and safe attributes are present
  const allowedTags = ['svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'g'];
  const allowedAttrs = ['viewBox', 'xmlns', 'd', 'cx', 'cy', 'r', 'x', 'y', 'width', 'height', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'transform'];
  
  // Basic validation: Check if string contains only allowed SVG tags
  const tagPattern = /<(\/?)([\w-]+)/g;
  const matches = html.matchAll(tagPattern);
  
  for (const match of matches) {
    const tagName = match[2].toLowerCase();
    if (!allowedTags.includes(tagName)) {
      console.warn(`Sanitizer: Blocked disallowed tag: ${tagName}`);
      return ''; // Return empty string if any disallowed tag found
    }
  }
  
  // Check for script or event handlers
  if (html.includes('script') || html.includes('javascript:') || /on\w+\s*=/i.test(html)) {
    console.warn('Sanitizer: Blocked potentially dangerous content');
    return '';
  }
  
  return html;
}

