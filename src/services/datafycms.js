import datafyCMS from '@datafycms/js-client';

export const getPosts = async () => {
  
  datafyCMS.collections('post')
    .fields('slug', 'title', 'image', 'author.slug')
}
