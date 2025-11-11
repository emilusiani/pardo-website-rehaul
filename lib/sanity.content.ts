import { sanityClient } from './sanity.client';
import { staticContent, type ContentData } from './content';

export async function loadContent(): Promise<ContentData> {
  if (!sanityClient) return staticContent;

  const services = await sanityClient.fetch(
    `*[_type=="service"]|order(order asc){
      "key": _id,
      title,
      description,
      icon
    }`
  );

  const projects = await sanityClient.fetch(
    `*[_type=="project"]|order(order asc){
      "key": _id,
      "image": coalesce(imagePath, "/assets/image1.jpg"),
      alt,
      tag,
      title,
      summary
    }`
  );

  return {
    services: services?.length ? services : staticContent.services,
    projects: projects?.length ? projects : staticContent.projects
  };
}
