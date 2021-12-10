const datafyCMS = require('@datafycms/js-client')

export const getLastPartner = async () => {
  const response = await datafyCMS.collections('partnership')
    .fields(['partner_image.url', 'partner_logo.url', 'new_partner_description'])
    .pageSize(1)
    .list()
  
  return response.results
}



export const getPartners = async () => {
  const response = await datafyCMS.collections('partnership')
    .fields(['partner_logo.url', 'partner_summary', 'benefits_document.url'])
    .list()
  
  return response.results
}

export const getMentorsSlugs = async () => {
  const response = await datafyCMS.collections('mentor')
    .fields(['slug'])
    .pageSize(100)
    .list()
  
  return response.results.map(value => value.slug);
}

export const getMentors = async () => {
  const response = await datafyCMS.collections('mentor')
    .fields(['id', 'nickname', 'first_name', 'last_name', 'professional_profile_image.url', 'funny_profile_image.url', 'title', 'keywords', 'starting_price', 'organization', 'slug', 'free_call'])
    .pageSize(50)
    .list()
  return response.results;
}

export const getMentor = async (slug) => {
  return datafyCMS.collections('mentor')
    .fields([
      'id',
      'nickname',
      'first_name',
      'last_name',
      'professional_profile_image.url',
      'funny_profile_image.url',
      'title',
      'keywords',
      'starting_price',
      'slug',
      'pronouns',
      'summary',
      'organization',
      'support_summary',
      'experience',
      'experience_summary',
      'facebook',
      'youtube',
      'twitter',
      'slug',
      'trafft_employee_id',
      'instagram',
      'linkedin',
      'medium',
      'website',
      'free_call',
    ])
    .record(slug)
    .get()
}

export const getFrequentlyAskQuestions = async () => {
  const response = await datafyCMS.collections('faq')
    .pageSize(50)
    .list()
  return response.results;
}
